import React, { useContext, useState, useEffect } from "react";
import axios from "axios"


export async function InsertsOrUpdate(params){
  var url = params.url
        try {
          axios.post(url, params.data).then(function (response) {
          })
      } catch (err) {
        console.log(err)
      }         
  }

