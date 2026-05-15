import { useEffect, useId, useRef, useState, type ButtonHTMLAttributes, type CSSProperties, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'destructive';
type Size = 'sm' | 'md' | 'lg';

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

function getFocusable(container: HTMLElement | null) {
  if (!container) return [];
  return Array.from(container.querySelectorAll<HTMLElement>(focusableSelector)).filter(
    (element) => !element.hasAttribute('disabled') && element.getAttribute('aria-hidden') !== 'true',
  );
}

export function Button({
  children,
  variant = 'secondary',
  size = 'md',
  pending = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size; pending?: boolean }) {
  const disabled = Boolean(props.disabled || pending);
  return (
    <button {...props} className={`button button-${variant} button-${size}`} disabled={disabled}>
      {pending ? <Spinner label="Action pending" /> : null}
      {children}
    </button>
  );
}

export function IconButton({
  label,
  children,
  variant = 'ghost',
  size = 'md',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { label: string; variant?: Variant; size?: Size }) {
  return (
    <button className={`icon-button icon-button-${variant} icon-button-${size}`} aria-label={label} title={label} {...props}>
      {children}
    </button>
  );
}

export function TextInput({
  label,
  help,
  error,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string; help?: string; error?: string }) {
  const id = useId();
  const helpId = `${id}-help`;
  const errorId = `${id}-error`;
  const describedBy = [help ? helpId : undefined, error ? errorId : undefined].filter(Boolean).join(' ') || undefined;
  return (
    <label className="field" htmlFor={id}>
      <span className="field-label">{label}</span>
      <input id={id} className="input" aria-invalid={Boolean(error)} aria-describedby={describedBy} {...props} />
      {help ? <span id={helpId} className="field-help">{help}</span> : null}
      {error ? <span id={errorId} className="field-error">{error}</span> : null}
    </label>
  );
}

export function Textarea({
  label,
  help,
  error,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; help?: string; error?: string }) {
  const id = useId();
  const helpId = `${id}-help`;
  const errorId = `${id}-error`;
  const describedBy = [help ? helpId : undefined, error ? errorId : undefined].filter(Boolean).join(' ') || undefined;
  return (
    <label className="field" htmlFor={id}>
      <span className="field-label">{label}</span>
      <textarea id={id} className="textarea" aria-invalid={Boolean(error)} aria-describedby={describedBy} {...props} />
      {help ? <span id={helpId} className="field-help">{help}</span> : null}
      {error ? <span id={errorId} className="field-error">{error}</span> : null}
    </label>
  );
}

export function SelectField({
  label,
  help,
  error,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { label: string; help?: string; error?: string; children: ReactNode }) {
  const id = useId();
  const helpId = `${id}-help`;
  const errorId = `${id}-error`;
  const describedBy = [help ? helpId : undefined, error ? errorId : undefined].filter(Boolean).join(' ') || undefined;
  return (
    <label className="field" htmlFor={id}>
      <span className="field-label">{label}</span>
      <select id={id} className="select" aria-invalid={Boolean(error)} aria-describedby={describedBy} {...props}>
        {children}
      </select>
      {help ? <span id={helpId} className="field-help">{help}</span> : null}
      {error ? <span id={errorId} className="field-error">{error}</span> : null}
    </label>
  );
}

export function CheckboxField({ label, help, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string; help?: string }) {
  const id = useId();
  return (
    <label className="field checkbox-field" htmlFor={id}>
      <span className="status-row">
        <input id={id} type="checkbox" {...props} />
        <span className="field-label">{label}</span>
      </span>
      {help ? <span className="field-help">{help}</span> : null}
    </label>
  );
}

export function SwitchField({ label, help, checked, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string; help?: string }) {
  const id = useId();
  return (
    <label className="field switch-field" htmlFor={id}>
      <span className="status-row">
        <input id={id} type="checkbox" role="switch" checked={checked} {...props} />
        <span className="field-label">{label}</span>
      </span>
      {help ? <span className="field-help">{help}</span> : null}
    </label>
  );
}

export function Badge({ children, tone = 'neutral' }: { children: ReactNode; tone?: string }) {
  return <span className={`badge status-${tone}`}>{children}</span>;
}

export function StatusPill({ status, label }: { status: string; label?: string }) {
  return (
    <span className={`status-pill status-${status}`}>
      <span className="status-dot" aria-hidden="true" />
      {label ?? status}
    </span>
  );
}

export function ProgressBar({ value, label, tone = 'rendering' }: { value: number; label: string; tone?: string }) {
  return (
    <div className="field" role="group" aria-label={label}>
      <span className="field-help">{label}: {value}%</span>
      <div className="progress-track" role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={value}>
        <span className="progress-fill" style={{ '--progress-value': `${value}%`, '--progress-color': `var(--status-${tone})` } as CSSProperties} />
      </div>
    </div>
  );
}

export function Tabs({ tabs, active, onChange }: { tabs: string[]; active: string; onChange: (tab: string) => void }) {
  return (
    <div className="tabs" role="tablist" aria-label="Local view selector">
      {tabs.map((tab) => (
        <button key={tab} className="tab-button" role="tab" aria-selected={active === tab} onClick={() => onChange(tab)}>
          {tab}
        </button>
      ))}
    </div>
  );
}

export function Tooltip({ label, children }: { label: string; children: ReactNode }) {
  return <span title={label}>{children}</span>;
}

export function Popover({ trigger, children }: { trigger: ReactNode; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <span className="popover">
      <button className="button button-ghost button-sm" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        {trigger}
      </button>
      {open ? <span className="panel" role="dialog">{children}</span> : null}
    </span>
  );
}

export function Dialog({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const focusable = getFocusable(dialogRef.current);
    (focusable[0] ?? dialogRef.current)?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;
      const items = getFocusable(dialogRef.current);
      if (!items.length) {
        event.preventDefault();
        dialogRef.current?.focus();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      previousFocusRef.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="drawer-backdrop" role="presentation">
      <section ref={dialogRef} className="dialog panel" role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1}>
        <div className="status-row spread-row">
          <h2 id={titleId}>{title}</h2>
          <button ref={closeRef} className="icon-button icon-button-ghost icon-button-md" aria-label="Close dialog" title="Close dialog" onClick={onClose}>Close</button>
        </div>
        {children}
      </section>
    </div>
  );
}

export function Drawer({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}) {
  const titleId = useId();
  const drawerRef = useRef<HTMLElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!open) return;
    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const focusable = getFocusable(drawerRef.current);
    (focusable[0] ?? drawerRef.current)?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;
      const items = getFocusable(drawerRef.current);
      if (!items.length) {
        event.preventDefault();
        drawerRef.current?.focus();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      previousFocusRef.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="drawer-backdrop" role="presentation">
      <aside ref={drawerRef} className="drawer panel" role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1}>
        <div className="status-row spread-row">
          <h2 id={titleId}>{title}</h2>
          <IconButton label="Close panel" onClick={onClose}>Close</IconButton>
        </div>
        {children}
      </aside>
    </div>
  );
}

export function Toast({ tone = 'success', title, message }: { tone?: string; title: string; message: string }) {
  return (
    <div className={`toast status-${tone}`} role={tone === 'danger' ? 'alert' : 'status'} aria-live={tone === 'danger' ? 'assertive' : 'polite'}>
      <strong>{title}</strong>
      <span>{message}</span>
    </div>
  );
}

export function Alert({ tone = 'warning', title, message, action }: { tone?: 'warning' | 'critical' | 'info'; title: string; message: string; action?: ReactNode }) {
  return (
    <div className={`alert alert-${tone}`} role={tone === 'critical' ? 'alert' : 'status'}>
      <strong>{title}</strong>
      <span>{message}</span>
      {action}
    </div>
  );
}

export function Skeleton({ height = '44px' }: { height?: string }) {
  return <div className="skeleton" style={{ '--skeleton-height': height } as CSSProperties} aria-hidden="true" />;
}

export function Spinner({ label = 'Loading' }: { label?: string }) {
  return <span className="spinner" role="status" aria-label={label} />;
}

export function TableShell({ caption, children }: { caption: string; children: ReactNode }) {
  return (
    <div className="data-table-wrap">
      <table className="data-table">
        <caption>{caption}</caption>
        {children}
      </table>
    </div>
  );
}
