import { useEffect, useState } from 'react';
import { AppShell } from '../components/layout';
import { navItems } from './routes';
import { BatchDetailPage } from '../pages/BatchDetailPage';
import { ControlRoomDashboard } from '../pages/ControlRoomDashboard';
import { CostAnalyticsPage } from '../pages/CostAnalyticsPage';
import { ModerationReviewPage } from '../pages/ModerationReviewPage';
import { PromptStudioPage } from '../pages/PromptStudioPage';
import { ProviderHealthPage } from '../pages/ProviderHealthPage';
import { PublishingCalendarPage } from '../pages/PublishingCalendarPage';
import { RenderQueuePage } from '../pages/RenderQueuePage';
import { SettingsPage } from '../pages/SettingsPage';

function normalizePath() {
  return window.location.pathname || '/';
}

export function App() {
  const [path, setPath] = useState(normalizePath());

  useEffect(() => {
    const onPop = () => setPath(normalizePath());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    document.getElementById('main-content')?.focus();
  }, [path]);

  const navigate = (nextPath: string) => {
    window.history.pushState({}, '', nextPath);
    setPath(nextPath);
  };

  let page = <ControlRoomDashboard onNavigate={navigate} />;
  if (path.startsWith('/queue')) page = <RenderQueuePage onNavigate={navigate} />;
  if (path.startsWith('/batch/')) page = <BatchDetailPage batchId={path.split('/')[2]} />;
  if (path.startsWith('/studio')) page = <PromptStudioPage />;
  if (path.startsWith('/providers')) page = <ProviderHealthPage />;
  if (path.startsWith('/costs')) page = <CostAnalyticsPage />;
  if (path.startsWith('/moderation')) page = <ModerationReviewPage />;
  if (path.startsWith('/calendar')) page = <PublishingCalendarPage />;
  if (path.startsWith('/settings')) page = <SettingsPage />;

  return (
    <AppShell navItems={navItems} currentPath={path} onNavigate={navigate}>
      {page}
    </AppShell>
  );
}
