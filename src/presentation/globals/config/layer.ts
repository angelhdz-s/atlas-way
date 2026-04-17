export type Overlay = {
  id: string;
  type: 'modal' | 'tooltip' | 'dropdown';
  onClose: () => void;
};

// Global stack for all floating UI
export let layerStack: Overlay[] = [];

export const pushLayer = (layer: Overlay) => layerStack.push(layer);

export const popLayer = (id: string) => {
  layerStack = layerStack.filter((l) => l.id !== id);
};

export const closeTopLayer = () => {
  const top = layerStack[layerStack.length - 1];
  if (top) {
    top.onClose();
    return true; // Something was closed
  }
  return false;
};
