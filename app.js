function parking() {

    // var user = document.querySelector('#user').value
    // var inp = document.querySelector('#inp').value
    // user = document.querySelector('#user').innerHTML  = ''
    // inp = document.querySelector('#inp').innerHTML  = ''
    var parkingObj = [
        {
            bookTime: '03:00 PM',
            slotNum: '3',
            endTime: '05:00 PM'
        },
        {
            bookedTime: '09:00 AM',
            slotNum: '5',
            endTime: '11:30AM'
        },
        {
            bookedTime: '04:00 PM',
            slotNum: '4',
            endTime: '07:00 PM'
        },
        {
            userBookedTime: document.querySelector('#bookedTime').value,
            userSlotNumber: document.querySelector('#slotNumber').value,
            userEndTime: document.querySelector('#endTime').value

        }
    ]
  

    if (parkingObj[3]['userBookedTime'] >= parkingObj[0]['bookTime'] && parkingObj[3]['userSlotNumber'] === parkingObj[0]['slotNum'] && parkingObj[3]['userEndTime'] <= parkingObj[0]['endTime']) {
        
  document.querySelector('#user').innerHTML  = `sorry this slot ${parkingObj[0]['slotNum'] } and this time ${ parkingObj[0]['bookTime']}   is booked please select another slot or another time \n choose the below slots`
  
  var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
  arr1.splice(2 , 1 , '3 is Booked')
  arr1.map((val, arr1) => {
      document.querySelector('#inp').innerHTML +=  `  *   ${val }<br/>`
    })
}




else if (parkingObj[3]['userBookedTime'] >= parkingObj[1]['bookedTime'] && parkingObj[3]['userSlotNumber'] === parkingObj[1]['slotNum'] && parkingObj[3]['userEndTime'] <= parkingObj[1]['endTime']) {
    
    document.querySelector('#user').innerHTML  = `sorry this slot ${ parkingObj[1]['slotNum']  }  and this time ${ parkingObj[1]['bookedTime']}   is booked please select another slot or another time \n choose the below slots`
    
    var arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
    arr2.splice(4 , 1 , '5 is Booked')
    arr2.map((val, arr2) => {
        
        document.querySelector('#inp').innerHTML += `  *   ${val }<br/>`
    })
}




else if (parkingObj[3]['userBookedTime'] >= parkingObj[2]['bookedTime'] && parkingObj[3]['userSlotNumber'] === parkingObj[2]['slotNum'] && parkingObj[3]['userEndTime'] <= parkingObj[2]['endTime']) {

    document.querySelector('#user').innerHTML  = `sorry this slot ${ parkingObj[2]['slotNum']  }  and this time ${ parkingObj[2]['bookedTime']}   is booked please select another slot or another time \n choose the below slots`

    
        var arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
        arr2.splice(3 , 1 , '4 is Booked')
        arr2.map((val, arr2) => {
            
        document.querySelector('#inp').innerHTML += `  *  ${val }<br/>`
        })
    }else {
       
        document.querySelector('#user').innerHTML  = 'parking is avilible '
    }


}


