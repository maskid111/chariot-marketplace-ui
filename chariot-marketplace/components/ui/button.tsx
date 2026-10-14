'use client';
import React from 'react';
import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';
export type ButtonProps=React.ButtonHTMLAttributes<HTMLButtonElement>&{variant?:'primary'|'outline'|'gold';size?:'default'|'sm'};
/** Reusable shadcn-style UI primitive; replaceable with the shadcn CLI component later. */
export function Button({variant='primary',size='default',className,children,...props}:ButtonProps){return <button className={twMerge(clsx(variant==='primary'?'btn-primary':variant==='gold'?'btn-gold':'btn-outline',size==='sm'&&'!py-2 !px-3',className))} {...props}>{children}</button>}
