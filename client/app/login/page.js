'use client'

import LoginForm from '@/components/ui/login-form';
import SignupForm from '@/components/ui/signup-form';
import React, { useState } from 'react'


export default function Home() {

  const [toggleForm, setToggleForm] = useState(false);

  const toggle = () => {
    setToggleForm(!toggleForm);
  }

  return (
    <div className="flex flex-col items-center bg-background">
      { toggleForm ? <SignupForm toggle={toggle}/> :  <LoginForm toggle={toggle}/> }
    </div>
  );
}
