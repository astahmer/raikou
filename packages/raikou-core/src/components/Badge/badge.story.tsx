import React from 'react';
import { Badge } from './Badge';

export default { title: 'Badge' };

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Badge leftSection={<span>1</span>} styles={{
        root: {
          backgroundColor: "red"
        }
      }}>
        Unstyled badge
      </Badge>
    </div>
  );
}

