export const formateDate=(date,config)=>{
    const defalutOptions={day:'numeric',month:'short',year:'numeric'}
    const options=config?config:defalutOptions
    return new Date(date).toLocaleDateString('en-US',options)
}