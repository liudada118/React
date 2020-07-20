import Mock from 'mockjs'

export default Mock.mock('/赣州-南昌',
'get',{
    'chepiao' : {
        'address' : '赣州-南昌',
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