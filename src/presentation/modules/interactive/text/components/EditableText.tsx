import { Alert } from '@/presentation/modules/alert/components/Alert';
import { Icon } from '@/presentation/modules/icon/components/Icon';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  text?: string;
  defaultText?: string;
  emptyText?: string;
  placeholder: string;
  isNew?: boolean;
  onDone?: (newText: string) => void;
  onCancel?: () => void;
  validate?: (newText: string) => true | string;
  as: React.ElementType;
};

export function EditableText({
  className,
  text,
  defaultText,
  emptyText,
  placeholder,
  as: Tag = 'span',
  isNew = false,
  onDone,
  onCancel,
  validate,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isEditing, setIsEditing] = useState(false);

  const [draftText, setDraftText] = useState(text || defaultText || '');
  const [accepetedText, setAcceptedText] = useState(text || defaultText || '');
  const [serverText, setServerText] = useState(text || defaultText || '');

  const [error, setError] = useState<string | null>(null);

  const startEditing = () => {
    if (isEditing === true) return;
    setIsEditing(true);
  };

  const stopEditing = () => {
    if (isEditing === false) return;
    setIsEditing(false);
  };

  const cleanError = () => {
    setError(null);
  };

  const cancelEditing = () => {
    if (draftText === accepetedText) return setIsEditing(false);
    setDraftText(accepetedText);
    stopEditing();
    onCancel?.();
    cleanError();
  };

  const saveEditing = () => {
    if (draftText === accepetedText) return stopEditing();
    if (validate !== undefined) {
      const validation = validate(draftText);
      if (validation !== true) return setError(validation);
    }
    setAcceptedText(draftText);
    onDone?.(draftText);
    stopEditing();
  };

  const resetChanges = () => {
    setAcceptedText(serverText);
    setDraftText(serverText);
    stopEditing();
  };

  const handleKeyDownDoneOrCancel = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (e.key === 'Escape') return cancelEditing?.();
    if (e.key === 'Enter') return saveEditing?.();
  };

  const updateDraftText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    setDraftText(text);
    if (error) setError(null);
  };

  useEffect(() => {
    if (isEditing === true) inputRef.current?.focus();
  }, [isEditing]);

  useEffect(() => {
    setServerText(text || defaultText || '');
    setAcceptedText(text || defaultText || '');
    setDraftText(text || defaultText || '');
  }, [text, defaultText]);

  return isEditing ? (
    <div className="space-y-1">
      <div className="outline-bd-base-solid has-[input:focus]:outline-bd-accesibility-focus flex max-w-80 items-center gap-2 rounded-sm outline">
        <input
          value={draftText}
          placeholder={placeholder}
          className={twMerge(
            'placeholder:text-txt-base-placeholder w-full outline-none',
            className,
            'text-txt-base-heading'
          )}
          onChange={updateDraftText}
          onBlur={saveEditing}
          onKeyDown={handleKeyDownDoneOrCancel}
          ref={inputRef}
        />
        <button
          type="button"
          className="group flex size-5 cursor-pointer items-center justify-center"
          onClick={error !== null ? cancelEditing : saveEditing}
        >
          {error !== null ? (
            <>
              <Icon
                icon={'x'}
                variant={{ size: 'sm', weight: 'thin' }}
                className="text-ic-danger-default group-hover:hidden"
              />
              <Icon
                icon={'rotate-ccw'}
                variant={{ size: 'sm', weight: 'thin' }}
                className="text-ic-base-caption hidden group-hover:block"
              />
            </>
          ) : (
            <Icon
              icon={draftText === accepetedText ? 'rotate-ccw' : 'check'}
              variant={{ size: 'sm', weight: 'thin' }}
              className="text-ic-base-caption"
            />
          )}
        </button>
      </div>
      {error && <Alert type="danger" label={error} />}
    </div>
  ) : (
    <div className="hover group flex items-center gap-2 rounded-sm transition-colors">
      <Tag className={twMerge('cursor-pointer rounded-sm', className)} onDoubleClick={startEditing}>
        {draftText || emptyText}
      </Tag>
      {draftText !== serverText && (
        <button
          type="button"
          onClick={resetChanges}
          className="text-ic-in-progress-default hover:text-ic-base-top grid size-5 cursor-pointer place-content-center"
          aria-label="Revert changes"
        >
          <div className="bg-sf-in-progress-static size-2 rounded-full group-hover:hidden" />
          <Icon
            icon="rotate-ccw"
            variant={{ size: 'sm', weight: 'thin' }}
            className="hidden transition-colors group-hover:block"
          />
        </button>
      )}
      <button
        type="submit"
        className="hover:text-ic-base-top text-ic-base-caption flex size-5 cursor-pointer items-center justify-center opacity-0 transition-colors group-hover:opacity-100 focus:opacity-100"
        aria-label="Edit text"
        onClick={startEditing}
      >
        <Icon icon="square-pen" variant={{ size: 'sm', weight: 'thin' }} />
      </button>
    </div>
  );
}
