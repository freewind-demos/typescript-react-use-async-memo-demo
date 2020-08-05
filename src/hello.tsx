//import * as React from 'react'
import React, {useEffect, useState} from 'react'
import {useAsyncMemo} from "use-async-memo";

async function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('remote-hello')
    }, 1000)
  });
}

export default function Hello() {
  const remoteData = useAsyncMemo(() => fetchData(), [], 'init-value')

  useEffect(() => {
    console.log("### remoteData", remoteData)
  }, [remoteData])

  return <div>
    <h1>{remoteData}</h1>
  </div>
};
