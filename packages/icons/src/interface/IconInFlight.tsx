import React from 'react';
import withIcon, { Props } from '../withIcon';

function IconInFlight(props: Props) {
  return <svg {...props} xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><defs><path id="a" d="M0 0h24v24H0V0z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z" clip-path="url(#b)"/><path clip-path="url(#b)" fill="none" d="M0 0h24v24H0V0z"/></svg>;
}

export default withIcon('IconInFlight')(IconInFlight);