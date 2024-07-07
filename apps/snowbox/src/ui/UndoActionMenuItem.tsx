'use client';
import { ActionMenuItem } from '@arctic-kit/snow';

export function UndoActionMenuItem() {
  return <ActionMenuItem label="Undo" onClick={() => console.log('Undo')} />;
}
