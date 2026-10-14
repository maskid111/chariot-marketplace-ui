import React from 'react';
export function Badge({children,variant='neutral'}:{children:React.ReactNode;variant?:'neutral'|'success'|'warning'}){return <span className={'inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold '+(variant==='success'?'bg-green-50 text-green-700':variant==='warning'?'bg-amber-50 text-amber-700':'bg-gray-100 text-navy')}>{children}</span>}
