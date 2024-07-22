'use client';
import { Button, Drawer } from '@arctic-kit/snow';
import { useState } from 'react';

export function DrawerView() {
  const [open, setOpen] = useState(false);

  const onChange = (openValue: boolean) => {
    setOpen(openValue);
  };

  return (
    <>
      <Button onClick={() => onChange(true)}>Open Drawer</Button>
      <Drawer
        open={open}
        title="This is the title section"
        titleFooter="This is the title footer section"
        onOpenChange={onChange}
        onCancel={() => onChange(false)}
        onAction={() => {
          onChange(false);
        }}
        onClose={() => onChange(false)}
      >
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            vehicula odio at efficitur fringilla. Duis vel urna eu elit congue
            dapibus et sit amet justo. Quisque ac mi sed metus sagittis
            elementum. Sed sed urna vel elit cursus sodales ac non mauris.
          </p>
          <p>
            Vestibulum rhoncus sapien in sem cursus, id consectetur justo
            sodales. Aliquam erat volutpat. In hac habitasse platea dictumst.
            Integer gravida odio in volutpat facilisis. Quisque non semper
            augue. Duis vel libero nec eros facilisis fermentum.
          </p>
          <p>
            Curabitur vel cursus odio. Nullam imperdiet massa in purus commodo
            luctus. Etiam et massa et metus volutpat imperdiet. Integer in nunc
            eu dui feugiat hendrerit. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </>
      </Drawer>
    </>
  );
}
