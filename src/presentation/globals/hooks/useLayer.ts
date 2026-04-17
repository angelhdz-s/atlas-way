import { useEffect, useId, useRef } from 'react';

const layerStack: string[] = [];

export const registerLayer = (id: string) => layerStack.push(id);
export const unregisterLayer = (id: string) => {
  const index = layerStack.indexOf(id);
  if (index > -1) layerStack.splice(index, 1);
};

type Props = {
  onClose: () => void;
  isOpen: boolean;
};
export function useLayer({ onClose, isOpen }: Props) {
  const id = useId();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        if (layerStack[layerStack.length - 1] === id) {
          onClose();
        }
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) {
        onClose();
      }
    };

    registerLayer(id);
    window.addEventListener('keydown', handleEsc);
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      unregisterLayer(id);
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [id, isOpen, onClose]);

  return {
    ref,
  };
}
