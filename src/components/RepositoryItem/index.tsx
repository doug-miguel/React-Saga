import React from 'react';

import { Repository } from '../../store/ducks/repositoris/types';

interface OwnProps {
  repository: Repository
}

export default function RepositoryItem({ repository }: OwnProps) {
  return <li>{repository.name}</li>
}