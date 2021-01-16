function formValidation(){
  if(userFnamevali()){
    return false;
    if(userLnamevali()){
      return false;
      if(emailVali()){
        return false;
        if(phoneVali()){
          return false;
          if(addressVali()){
            return false;
            if(stateSelect()){
              return false;
              if(zipVali()){
                return false;
              }
            }
          }
        }
      }
    }
  }
  return true;
}