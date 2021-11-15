import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";

import { Container } from './styles';

export function Qrcode() {
  let { id } = useParams();

  return (
    <Container>
      {id}
    </Container>
  )
}