
import { v4 as uuidv4 } from 'uuid';

const Catalog = [

    {
        id: '1',
        collection: [
            {
                id: uuidv4(),
                name: 'Camisa de corte ancho',
                code: 'XJ4RT7YHD0-3H65DW',
                cost: '500.50',
                img: 'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            },
            {
                id: uuidv4(),
                name: 'Camisa Formal Newmans ',
                code: 'MX3RTDHNDT-22V5FF',
                cost: '550.50',
                img: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
            },
            {
                id: uuidv4(),
                name: 'Camisa Bernard Degrat',
                code: 'JDI3TDGY67-LDO847',
                cost: '650.50',
                img: 'https://images.unsplash.com/photo-1626497764746-6dc36546b388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80'
            },
            {
                id: uuidv4(),
                name: 'Camisa Formal Shepard ',
                code: 'JSI34KD5LD-9DKF4S',
                cost: '480.50',
                img: 'https://images.unsplash.com/photo-1602810316693-3667c854239a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            },
            {
                id: uuidv4(),
                name: 'Camisa Cotton Surge',
                code: 'DJF37SOE9D-J38SL4',
                cost: '780.50',
                img: 'https://images.unsplash.com/photo-1602810319428-019690571b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            },
            {
                id: uuidv4(),
                name: 'Camisa BT c/rayas',
                code: 'HSD37SKD9A-28SK3F',
                cost: '630.50',
                img: 'https://images.unsplash.com/photo-1626753846051-29b988f34fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            },
            {
                id: uuidv4(),
                name: 'Camisa VW Plana',
                code: '8JKD6H34SW-WSF3F9',
                cost: '300.50',
                img: 'https://images.unsplash.com/photo-1586363090844-099253d6a1cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            },
            {
                id: uuidv4(),
                name: 'Camisa Fulleni GC',
                code: 'FS923KSI7S-29SDJT',
                cost: '400.90',
                img: 'https://images.unsplash.com/photo-1503672902329-038a842c63b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
            },

        ]

    }
    ,
    {
        id: '2',
        collection: [
            {
                id: uuidv4(),
                name: 'Pantalón Levis Classic',
                code: '9DJ4D90HJS-27SHTY',
                cost: '980.50',
                img: 'https://images.unsplash.com/photo-1605518215584-5ba74df5dfd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
            },
            {
                id: uuidv4(),
                name: 'Pantalón Jannice Prex',
                code: '8DJ58DI8WH-0SJCIU',
                cost: '1230.00',
                img: 'https://images.unsplash.com/photo-1454720503269-3a35c21bebc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80'
            },
            {
                id: uuidv4(),
                name: 'Pantalón FDW EST',
                code: '0SJTUSEYGT-289SKD',
                cost: '720.90',
                img: 'https://images.unsplash.com/photo-1509003124559-eb6678fe452b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            },
            {
                id: uuidv4(),
                name: 'Pantalón Rowan LW',
                code: 'L9SJ27SHTY-0982KS',
                cost: '540.90',
                img: 'https://images.unsplash.com/photo-1524787805232-c1d8c5121399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
            }
            ,
            {
                id: uuidv4(),
                name: 'Pantalón Rolla Duster',
                code: '9SJTYSHTF8-920JSU',
                cost: '1340.90',
                img: 'https://images.unsplash.com/photo-1580437167606-6e682c992c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1126&q=80'
            },
            {
                id: uuidv4(),
                name: 'Pantalón Phantom body',
                code: '8SH27FT9SO-0OSIRY',
                cost: '1530.20',
                img: 'https://images.unsplash.com/photo-1525428890425-7e06fd6e3b6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1808&q=80'
            },
            {
                id: uuidv4(),
                name: 'Pantalón Levis MiXer',
                code: '8SJDUTHS8D-30SKD8',
                cost: '900.00',
                img: 'https://images.unsplash.com/photo-1559716779-e0de0448943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            },
            {
                id: uuidv4(),
                name: 'Pantalón OldNavy TR',
                code: '9SJ7DLAISU-9SJDTH',
                cost: '620.70',
                img: 'https://images.unsplash.com/photo-1534773297835-3255d35dafda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            },
            {
                id: uuidv4(),
                name: 'Pantalón Radamast PC',
                code: 'SKDOSKTHUS-29SJUF',
                cost: '880.50',
                img: 'https://images.unsplash.com/photo-1520946916217-98c5e638a9a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            },
            {
                id: uuidv4(),
                name: 'Pantalón Radamast XR',
                code: 'SKD8ISODHT-393245',
                cost: '750.90',
                img: 'https://images.unsplash.com/photo-1515663705475-2a130ad7668e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            },
            {
                id: uuidv4(),
                name: 'Pantalón Radamast E',
                code: 'SKOD92SO0S-0S9DTS',
                cost: '850.90',
                img: 'https://images.unsplash.com/photo-1520472713165-3b3ac41d8e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }

        ]

    },
    {
        id: '3',
        collection: [
            {
                id: uuidv4(),
                name: 'Tennis Nike Splash',
                code: 'I9S0DUSITH-3993KS',
                cost: '2550.90',
                img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            },
            {
                id: uuidv4(),
                name: 'Sandalía Cerrada ES',
                code: 'SA0JSYUTJ8-293SLS',
                cost: '1050.90',
                img: 'https://images.unsplash.com/photo-1534653299134-96a171b61581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80'
            },
            {
                id: uuidv4(),
                name: 'Tennis Nike Mtn Race',
                code: '8SJD7SHT8X-ZA02KS',
                cost: '1730.00',
                img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80'
            },
            {
                id: uuidv4(),
                name: 'Tennis Converse Classic',
                code: 'SJDIS94JS8-SJDOZ9',
                cost: '830.00',
                img: 'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            }
            ,
            {
                id: uuidv4(),
                name: 'Tennis Star Roulette',
                code: 'JSIEJS89S0-J8S7S9',
                cost: '630.00',
                img: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80'
            },
            {
                id: uuidv4(),
                name: 'Zapato Veni-Deux',
                code: '9SJTIS72HS-0Z9ALS',
                cost: '730.00',
                img: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1185&q=80'
            },
            {
                id: uuidv4(),
                name: 'Tennis Nike ACRONYM',
                code: '9S21JSIT8S-0SKFJZ',
                cost: '2750.50',
                img: 'https://images.unsplash.com/photo-1558004282-e2b2587e3e47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80'
            },
            {
                id: uuidv4(),
                name: 'Zapato Neumans c/Tacón',
                code: 'KIS099OMBJ-JHTSY6',
                cost: '1750.50',
                img: 'https://images.unsplash.com/photo-1584473457417-bd0afe798ae1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
            ,
            {
                id: uuidv4(),
                name: 'Botín Serein c/Tacón',
                code: 'IKBM9XJSYU-KGJAYZ',
                cost: '925.50',
                img: 'https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
            ,
            {
                id: uuidv4(),
                name: 'Botín Seo c/Tacón',
                code: 'S0FJAS8IS0-KSIZ02',
                cost: '1250.30',
                img: 'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80'
            }
            ,
            {
                id: uuidv4(),
                name: 'Mocasín Barnes Dull',
                code: 'KS9LSITJSU-29SOST',
                cost: '2370.00',
                img: 'https://images.unsplash.com/photo-1616406432452-07bc5938759d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
            }
            ,
            {
                id: uuidv4(),
                name: 'Tennis Converse Play',
                code: '0SOPEYSUTI-202LKS',
                cost: '990.60',
                img: 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            },
            {
                id: uuidv4(),
                name: 'Tennis Vans Clear Edition',
                code: '90SLSHTUIS-102J3S',
                cost: '1590.30',
                img: 'https://images.unsplash.com/photo-1512990414788-d97cb4a25db3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80'
            }
            ,
            {
                id: uuidv4(),
                name: 'Zapato Newmans CB',
                code: 'KIUUSM89S0-LSI736',
                cost: '3500.00',
                img: 'https://images.unsplash.com/photo-1563434564528-8fdf5996e622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
            ,
            {
                id: uuidv4(),
                name: 'Tennis Vans L&F',
                code: '8ISJDYYSUI-23A9L1',
                cost: '850.00',
                img: 'https://images.unsplash.com/photo-1542272605-15bd6a2bd4f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            },
            {
                id: uuidv4(),
                name: 'Tennis Nike Flexi Mob',
                code: '0OIU8HSK18-0SK2JS',
                cost: '840.00',
                img: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
            }
        ]

    },
    {
        id: '4',
        collection: [
            {
                id: uuidv4(),
                name: 'Reloj Fossil Neo',
                code: '90LOJUS8SM-28SJS8',
                cost: '2750.90',
                img: 'https://images.unsplash.com/photo-1560079616-a788c0a654e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            },
            {
                id: uuidv4(),
                name: 'Cinturón OG Cluster',
                code: 'JKS8S15XMO-JSH83S',
                cost: '650.00',
                img: 'https://images.unsplash.com/photo-1590508340390-ea4ba24fca36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            },
            {
                id: uuidv4(),
                name: 'Reloj de Pulso M&M',
                code: 'J902LS8JYT-QP95SD',
                cost: '2380.00',
                img: 'https://images.unsplash.com/photo-1516700829972-65a01767c294?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
            },
            {
                id: uuidv4(),
                name: 'Cartera Levis Outlander',
                code: 'IOP098SJXH-QOS92H',
                cost: '1080.00',
                img: 'https://images.unsplash.com/photo-1624538000860-24716b9050f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
            ,
            {
                id: uuidv4(),
                name: 'Pendiente RL Crimson',
                code: '9HSYXT1726-0SD34S',
                cost: '740.40',
                img: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            },
            {
                id: uuidv4(),
                name: 'Reloj Curren Blanche G ',
                code: '8JSUTJS920-SL1OS8',
                cost: '4250.90',
                img: 'https://images.unsplash.com/photo-1575486684033-d05c5977cd4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'
            },
            {
                id: uuidv4(),
                name: 'Gafas Louis Blanchet ',
                code: 'KS9L27SJA7-0ZHQIP',
                cost: '2720.00',
                img: 'https://images.unsplash.com/photo-1559070081-648fb00b2ed1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            },
            {
                id: uuidv4(),
                name: 'Fragancia Channel Chance ',
                code: '9SKEUSY27S-LSO923',
                cost: '5480.60',
                img: 'https://images.unsplash.com/photo-1558038785-4fe65c791c99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80'
            }
            ,
            {
                id: uuidv4(),
                name: 'Reloj Curren Robledo',
                code: 'UEYS82JS0AP-29APZQ',
                cost: '1230.30',
                img: 'https://images.unsplash.com/photo-1623998021450-85c29c644e0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1257&q=80'
            }
            ,
            {
                id: uuidv4(),
                name: 'Gorra Kenji Street',
                code: '0PS78JHTUS-20APES',
                cost: '520.00',
                img: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
            ,
            {
                id: uuidv4(),
                name: 'Cinturón LV Armex',
                code: '90SPL76SKZ-0A2KSP',
                cost: '6290.90',
                img: 'https://images.unsplash.com/photo-1553704571-c32d20e6c74f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
            ,
            {
                id: uuidv4(),
                name: 'Pendientes LV Colety',
                code: 'PSKFUE8S0S-20S4LS',
                cost: '3890.90',
                img: 'https://images.unsplash.com/photo-1580675507535-83d70a59cf10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80'
            },
            {
                id: uuidv4(),
                name: 'Pendientes LV Remer',
                code: 'J93SG4SW2N-BSJ20S',
                cost: '3920.50',
                img: 'https://images.unsplash.com/photo-1632974754836-5aec43c7e3de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
            ,
            {
                id: uuidv4(),
                name: 'Anillo Colens Golden12',
                code: '9P2NJ85SLZ-20LAPS',
                cost: '7920.50',
                img: 'https://images.unsplash.com/photo-1603228693968-3bc8f76690c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
            ,
            {
                id: uuidv4(),
                name: 'Gafas Vans Street Walk',
                code: 'K9SOQ1N0P1-0S3LCE',
                cost: '220.00',
                img: 'https://images.unsplash.com/photo-1606357086272-eab87f3db598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
            },
            {
                id: uuidv4(),
                name: 'Bolsa Prada Milano',
                code: '0SP78JJHYU-NN2L3Z',
                cost: '8920.50',
                img: 'https://images.unsplash.com/photo-1585218356055-e1bbc5891162?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
            }
        ]

    }
]
export default Catalog;