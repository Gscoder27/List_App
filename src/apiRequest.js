const apiRequest = async (url = ' ', optionsObj=null, errMsg=null) => {
    try{
        const response = await fetch(url, optionsObj);
        if(!response.ok){
            throw new Error('Please relod the app');
        }
        // const data = await response.json();
        // return data;
    }catch(err){
        errMsg = err.message;
    }finally{
        return errMsg;  
    }
}

export default apiRequest;