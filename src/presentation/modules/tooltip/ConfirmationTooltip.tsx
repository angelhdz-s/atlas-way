import { TooltipBackdrop } from '@/presentation/globals/components/TooltipBackdrop';
import { useLayer } from '@/presentation/globals/hooks/useLayer';
import { Button } from '@/presentation/modules/button/components/Button';
import { IconX } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';

type Props = {
  isOpen: boolean;
  className?: string;
  onConfirm?: () => void;
  onClose?: () => void;
  onAbort?: () => void;
};

export function ConfirmationTooltip({ isOpen, onAbort, onClose, onConfirm, className }: Props) {
  const { ref } = useLayer({
    isOpen,
    onClose: () => onClose?.(),
  });

  const closeConfirmation = () => {
    onClose?.();
  };

  const abortConfirmation = () => {
    onAbort?.();
    closeConfirmation();
  };

  const proceedConfirmation = () => {
    onConfirm?.();
    closeConfirmation();
  };

  if (!isOpen) return null;

  return (
    <div className={'fixed inset-0 flex items-center justify-center'}>
      <main
        ref={ref}
        className={twMerge('bg-fill-base z-10 flex flex-col gap-4 rounded-2xl p-8', className)}
      >
        <header className="flex items-start justify-center gap-2">
          <main>
            <h4>Are you sure you want to proceed</h4>
            <p>This will end up the current stage of the process</p>
          </main>
          <div>
            <Button
              variant={{ type: 'icon', color: 'simple' }}
              Icon={IconX}
              aria-label="Close confirmation tooltip"
              onClick={closeConfirmation}
            />
          </div>
        </header>
        <footer className="flex justify-end gap-4">
          <Button variant={{ color: 'subtle' }} onClick={abortConfirmation}>
            Abort
          </Button>
          <Button variant={{ color: 'primary' }} onClick={proceedConfirmation}>
            Confirm
          </Button>
        </footer>
      </main>
      <TooltipBackdrop />
    </div>
  );
}
