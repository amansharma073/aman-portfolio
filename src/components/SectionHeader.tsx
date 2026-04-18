interface Props {
  title: string;
  highlight: string;
  sub: string;
  dark: boolean;
  pos?: 'start' | 'end';
}

export default function SectionHeader({ title, highlight, sub, dark, pos = 'end' }: Props) {
  return (
    <div className="text-center mb-20 reveal">
      <p className={`text-xs font-black uppercase tracking-[0.25em] mb-4 ${dark ? 'text-green-500' : 'text-green-600'}`}>
        {sub}
      </p>
      <h2 className={`text-5xl xl:text-6xl font-black tracking-tight leading-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
        {pos === 'start'
          ? <><span className="gradient-text">{highlight}</span>{' '}{title}</>
          : <>{title}{' '}<span className="gradient-text">{highlight}</span></>
        }
      </h2>
      <div className="flex items-center justify-center gap-2 mt-6">
        <div className={`h-px w-16 ${dark ? 'bg-slate-700' : 'bg-slate-200'}`} />
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <div className="w-10 h-1.5 rounded-full bg-green-500" />
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <div className={`h-px w-16 ${dark ? 'bg-slate-700' : 'bg-slate-200'}`} />
      </div>
    </div>
  );
}
