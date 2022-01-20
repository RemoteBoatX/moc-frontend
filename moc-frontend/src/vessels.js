
const vessels = [
    {
        'name' : 'Titanic',
        'mmsi' : '120334891',
        'call' : '',
        'loa' : 5.7,
        'breadth' : 8.4,
        'heigth' :  15,
        'draft' : 13,
        'from_above' : '/images/front.jpg',
        'from_abaft' : '/images/back.jpg',
        'simulation': 'yes',
        'infoSteams' : {
            'latitude' : 9,
            'longitude' : 400,
            'heading' : 500,
            'compass' : '',
            'camera' : 'yes',
            'lidar' : 'yes',
            'audio' : 'yes',
            'radar' : ''
        }
           

        

    },

    {
        'name' : 'Aboat',
        'mmsi' : '452755635',
        'call' : '123',
        'loa' : 5.7,
        'breadth' : 8.4,
        'heigth' :  15,
        'draft' : 13,
        'from_above' : '/images/front.jpg',
        'from_abaft' : '/images/back.jpg',
        'simulation': '',
        'infoSteams' : {
            'latitude' : 9,
            'longitude' : 400,
            'heading' : 500,
            'compass' : 'yes',
            'camera' : 'yes',
            'lidar' : 'yes',
            'audio' : 'yes',
            'radar' : ''
        }
    },

    {
        'name' : '',
        'mmsi' : '554546753',
        'call' : '',
        'loa' : 5.7,
        'breadth' : 8.4,
        'heigth' :  15,
        'draft' : 13,
        'from_above' : '',
        'from_abaft' : '',
        'simulation': '',
        'infoSteams' : {
            'latitude' : 9,
            'longitude' : 40,
            'heading' : 900,
            'compass' : '',
            'camera' : '',
            'lidar' : '',
            'audio' : 'yes',
            'radar' : 'yes'
        }
    }
]

export default vessels