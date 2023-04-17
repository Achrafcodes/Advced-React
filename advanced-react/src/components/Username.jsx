import React from 'react';
import { UsernameContext } from '../App';
import { useState, createContext, useContext } from 'react';
export default function UsernameConsumer() {
  const user = useContext(UsernameContext);
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}
