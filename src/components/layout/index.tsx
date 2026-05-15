import type { ReactNode } from 'react';
import { Button } from '../primitives';

export interface NavItem {
  path: string;
  label: string;
  short: string;
}

export function AppShell({
  children,
  navItems,
  currentPath,
  onNavigate,
}: {
  children: ReactNode;
  navItems: NavItem[];
  currentPath: string;
  onNavigate: (path: string) => void;
}) {
  const visibleMobileItems = navItems.slice(0, 5);
  const overflowMobileItems = navItems.slice(5);
  const overflowActive = overflowMobileItems.some((item) => currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path)));
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <aside className="sidebar">
        <div className="brand-lockup">
          <p className="brand-title">AI Video Factory</p>
          <span className="brand-meta">CONTROL ROOM / LIVE OPS</span>
        </div>
        <nav className="sidebar-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.path}
              className="nav-link"
              href={item.path}
              aria-current={currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path)) ? 'page' : undefined}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(item.path);
              }}
            >
              <span className="nav-mark" aria-hidden="true" />
              <span className="nav-label">{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>
      <div className="shell-main">
        <header className="top-command-bar">
          <div>
            <span className="eyebrow">PRODUCTION WINDOW / MAY 15, 2026</span>
            <div className="status-row">
              <strong>Daily target 72 videos</strong>
              <span className="metadata">58 rendered / 9 blocked / 5 scheduled</span>
            </div>
          </div>
          <div className="command-cluster">
            <Button variant="ghost" size="sm">Command K</Button>
            <Button variant="primary" size="sm">Launch Batch</Button>
          </div>
        </header>
        <main id="main-content" className="page-frame" tabIndex={-1}>
          {children}
        </main>
      </div>
      <nav className="mobile-bottom-nav" aria-label="Mobile primary navigation">
        {visibleMobileItems.map((item) => (
          <a
            key={item.path}
            className="mobile-nav-link"
            href={item.path}
            aria-current={currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path)) ? 'page' : undefined}
            onClick={(event) => {
              event.preventDefault();
              onNavigate(item.path);
            }}
          >
            <span className="nav-mark" aria-hidden="true" />
            <span>{item.short}</span>
          </a>
        ))}
        {overflowMobileItems.length ? (
          <details className={`mobile-more ${overflowActive ? 'is-active' : ''}`}>
            <summary>
              <span className="nav-mark" aria-hidden="true" />
              <span>More</span>
            </summary>
            <div className="mobile-overflow-menu">
              {overflowMobileItems.map((item) => (
                <a
                  key={item.path}
                  className="mobile-overflow-link"
                  href={item.path}
                  aria-current={currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path)) ? 'page' : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    onNavigate(item.path);
                    event.currentTarget.closest('details')?.removeAttribute('open');
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </details>
        ) : null}
      </nav>
    </div>
  );
}

export function CommandHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <header className="command-header">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h1 tabIndex={-1}>{title}</h1>
        <p>{description}</p>
      </div>
      {actions ? <div className="button-row">{actions}</div> : null}
    </header>
  );
}

export function Panel({ title, children, tone }: { title?: string; children: ReactNode; tone?: 'critical' | 'warning' }) {
  return (
    <section className={`panel ${tone ? `panel-${tone}` : ''}`} aria-label={title}>
      {title ? <h2>{title}</h2> : null}
      {children}
    </section>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="section" aria-labelledby={`${title.replace(/\W+/g, '-').toLowerCase()}-heading`}>
      <h2 id={`${title.replace(/\W+/g, '-').toLowerCase()}-heading`}>{title}</h2>
      {children}
    </section>
  );
}

export function WorkspaceGrid({ variant = 'dashboard', children }: { variant?: 'dashboard' | 'two' | 'three' | 'editor'; children: ReactNode }) {
  const className = variant === 'dashboard' ? 'grid-dashboard' : variant === 'two' ? 'grid-two' : variant === 'three' ? 'grid-three' : 'grid-editor';
  return <div className={`workspace-grid ${className}`}>{children}</div>;
}

export function SplitPane({ children }: { children: ReactNode }) {
  return <div className="split-pane">{children}</div>;
}

export function InspectorPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="inspector-panel" aria-labelledby={`${title.replace(/\W+/g, '-').toLowerCase()}-heading`}>
      <h2 id={`${title.replace(/\W+/g, '-').toLowerCase()}-heading`}>{title}</h2>
      {children}
    </aside>
  );
}

export function SideRail({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="side-rail" aria-labelledby={`${title.replace(/\W+/g, '-').toLowerCase()}-heading`}>
      <h2 id={`${title.replace(/\W+/g, '-').toLowerCase()}-heading`}>{title}</h2>
      {children}
    </aside>
  );
}

export function StatusRail({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="status-rail" aria-labelledby={`${title.replace(/\W+/g, '-').toLowerCase()}-heading`}>
      <h2 id={`${title.replace(/\W+/g, '-').toLowerCase()}-heading`}>{title}</h2>
      {children}
    </aside>
  );
}

export function Toolbar({ children, label = 'Toolbar' }: { children: ReactNode; label?: string }) {
  return <div className="toolbar" role="toolbar" aria-label={label}>{children}</div>;
}

export function BottomSheet({ children }: { children: ReactNode }) {
  return <div className="panel desktop-hidden">{children}</div>;
}
