import React, { useDebugValue } from 'react';

export default function CardPeople({name, height, mass, hair_color, eye_color, birth_year, gender}) {
  return (
      <ul>
      <li> {name} </li>
      <li> {height} </li>
      <li> {mass} </li>
      <li> {hair_color} </li>
      <li> {eye_color} </li>
      <li> {birth_year} </li>
      <li> {gender} </li>
      </ul>
  );
}
