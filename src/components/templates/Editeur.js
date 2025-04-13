
'use client'

import React from "react";
import parse from 'html-react-parser';
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
export default function Editeur({Article}){



    return(

        <div className="editeur" >
              <BlocksRenderer content={Article}  />
        </div>
    )
}