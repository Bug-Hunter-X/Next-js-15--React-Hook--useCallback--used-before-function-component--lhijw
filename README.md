# Next.js 15 Bug Report: React Hook 'useCallback' used before function component.

This repository demonstrates an uncommon bug encountered in Next.js 15 applications involving the use of React Hooks like `useCallback` outside of a functional component's scope. 

## Description

Attempting to use a React Hook like `useCallback` within a component's scope causes a runtime error. This typically happens when hooks are used within non-functional components or in inappropriate places within a functional component's structure. 

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the Next.js development server.
4. Navigate to `/about`.  You'll observe that this page renders the error because `useCallback` is used outside a functional component. 

## Solution

The solution involves correctly placing the `useCallback` hook within a functional component. The solution file (`aboutSolution.js`) corrects this, showing the correct placement. 
