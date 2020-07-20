import Mock from 'mockjs'

export default Mock.mock('/南昌-赣州',
'get',{
    'chepiao' : {
        'address' : '南昌-赣州',
        'daytime' : '2020-7-16',
        'type1|1' : [
            '高铁',
            ''
        ],
        'type2|1' : [
            '学生票',
            ''
        ],
        'checi|10' : [{
            'time' : '@time("HH:mm")'
        }]
    }
})


// {
//     chepiao: [
//         {
//             address: '南昌-赣州',
//             checi: [
//                 {
//                     daytime: '2020-7-16',
//                     type1: '高铁',
//                     type2: '学生票'
//                 }
//             ]
//         }
//     ]
// }