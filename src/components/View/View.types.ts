import { match } from 'react-router';

export interface ViewProps {
  match?: match<{ id: string }>;
}
