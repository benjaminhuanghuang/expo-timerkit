const plans =[
    {
        name:'ben-hit-basic',
        type:'basic',
        pattern: {
            workout: 60,
            recover: 20,
            sets: 4,
            cycles: 4,
            cycleRecover: 40      
        }
    },
    {
        name:'ben-hit-advanced',
        type:'advanced',
        cycleItems:[
            {
                name:'push up',
                type:'workout',
                time:'300',
            },
            {
                name:'recover',
                type:'recover',
                time:'10',
            },
        ],
        cyeleRecover: 1000,
    }
]