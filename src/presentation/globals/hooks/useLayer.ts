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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const element = ref.current;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        if (layerStack[layerStack.length - 1] === id) {
          onClose();
        }
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (!element) return;
      if (!element.contains(e.target as Node)) {
        onClose();
      }
    };

    const handleMouseLeave = () => {
      onClose();
    };

    registerLayer(id);
    window.addEventListener('keydown', handleEsc);
    window.addEventListener('mousedown', handleClickOutside);
    element?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      unregisterLayer(id);
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('mousedown', handleClickOutside);
      element?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [id, isOpen, onClose]);

  return {
    ref,
  };
}
