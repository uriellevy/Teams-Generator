import React, { useState, useEffect, createContext } from "react";


export const TeamsGeneratorContext = createContext<any>(null);

export const TeamsGeneratorProvider = (props: any) => {
  
  


  const value = {

  };

  return (
    <TeamsGeneratorContext.Provider value={value}>
      {props.children}
    </TeamsGeneratorContext.Provider>
  );
}