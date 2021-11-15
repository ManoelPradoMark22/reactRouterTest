import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { Container } from './styles';

export function SearchParams() {
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <Container>
      <text>{searchParams.get("id1")}</text>
      <text>{searchParams.get("id2")}</text>
    </Container>
  )
}