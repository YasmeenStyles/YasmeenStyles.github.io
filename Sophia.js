L.mapbox.accessToken = 'pk.eyJ1IjoiamVmZnN0ZXJuIiwiYSI6IlAzRFFiN0EifQ.mNWvayrLEw9wULuq0sopyA';
var map = L.mapbox.map('map', 'examples.map-20v6611k')
  .setView([-122.41941550000001, 37.7749295], 9);

var myLayer = L.mapbox.featureLayer().addTo(map);
var geojson = {
    type: 'FeatureCollection',
    // This is an array of Map Point objects
    features: [

    {
        type: 'Feature',
        properties: {
            title: '12th St. Oakland City Center',
            'marker-size': 'large',
            'marker-symbol': 'marker',
            'marker-color': '#66CCFF',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.271,37.803]
        }
    },
        {
        type: 'Feature',
        properties: {
            title: '16th St. Mission',
            'marker-color': '#66CCFF',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [ -122.419694,37.765062]
        }
    },
   		 {
        type: 'Feature',
        properties: {
            title: '19th St. Oakland',
            'marker-color': '#66CCFF',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.269029,37.80787]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: '24th St. Mission',
            'marker-color': '#66CCFF',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.418466,37.752254]
        }
    },
        {
        type: 'Feature',
        properties: {
            title: 'Ashby',
            'marker-color': '#66CCFF',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.26978,37.853024]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Balboa Park',
            'marker-color': '#66CCFF',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.4474142,37.72198087]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Bayfair',
            'marker-color': '#66CCFF',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.126871,37.697185]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Castro Valley',
            'marker-color': '#66CCFF',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.075567,37.690754]
        }
    },

    {
        type: 'Feature',
        properties: {
            title: 'Civic Center/UN Plaza',
            'marker-color': '#66CCFF',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.413756,37.779528]
        }
    },
{
        type: 'Feature',
        properties: {
            title: 'Coliseum/Oakland Airport',
            'marker-color': '#66CCFF',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.197273,37.754006]
        }
    },

    {
        type: 'Feature',
        properties: {
            title: 'Colma',
            'marker-color': '#66CCFF',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [ -122.466233,37.684638]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Concord',
            'marker-color': '#66CCFF',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.029095,37.973737]
        }
    },

    {
        type: 'Feature',
        properties: {
            title: 'Daly City',
            'marker-color': '#66CCFF',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [ -122.4690807,37.70612055]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Downtown Berkeley',
            'marker-color': '#66CCFF',
            'marker-size': 'large',
            'marker-symbol': 'marker',
    },
        geometry: {
            type: 'Point',
            coordinates: [-122.268045,37.869867]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Dublin/Pleasanton',
            'marker-color': '#66CCFF',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-121.900367,37.701695]
        }
    },

     {
        type: 'Feature',
        properties: {
            title: 'El Cerrito del Norte',
            'marker-color': '#66CCFF',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.317269,37.925655]
        }
    },

     {
        type: 'Feature',
        properties: {
            title: 'El Cerrito Plaza',
            'marker-color': '#66CCFF',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.2992715,37.9030588]
        }
    },
     {
        type: 'Feature',
        properties: {
            title: 'Embarcadero',
            'marker-color': '#66CCFF',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.396742,37.792976]
        }
    },
     {
        type: 'Feature',
        properties: {
            title: 'Fremont',
            'marker-color': '#66CCFF',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates:[-121.9764,37.557355]
        }
    },
     {
       type: 'Feature',
       properties: {
           title: 'Fruitvale',
           'marker-color': '#66CCFF',
           'marker-size': 'large',
           'marker-symbol': 'marker',
       },
       geometry: {
           type: 'Point',
           coordinates: [-122.224274,37.774963]
       }
   },
     {
      type: 'Feature',
      properties: {
          title: 'Glen Park',
          'marker-color': '#66CCFF',
          'marker-size': 'large',
          'marker-symbol': 'marker',
      },
      geometry: {
          type: 'Point',
          coordinates: [-122.434092,37.732921]
      }
  },
    {
     type: 'Feature',
     properties: {
         title: 'Hayward',
         'marker-color': '#66CCFF',
         'marker-size': 'large',
         'marker-symbol': 'marker',
     },
     geometry: {
         type: 'Point',
         coordinates: [-122.0879672,37.670399]
     }
 },
    {
    type: 'Feature',
    properties: {
        title: 'Lafayette',
        'marker-color': '#66CCFF',
        'marker-size': 'large',
        'marker-symbol': 'marker',
    },
    geometry: {
        type: 'Point',
        coordinates: [-122.123801,37.893394]
    }
},
   {
   type: 'Feature',
   properties: {
       title: 'Lake Merritt',
       'marker-color': '#66CCFF',
       'marker-size': 'large',
       'marker-symbol': 'marker',
   },
   geometry: {
       type: 'Point',
       coordinates: [-122.265609,37.797484]
   }
},
   {
   type: 'Feature',
   properties: {
       title: 'MacArthur',
       'marker-color': '#66CCFF',
       'marker-size': 'large',
       'marker-symbol': 'marker',
   },
   geometry: {
       type: 'Point',
       coordinates: [-122.267227,37.828415]
   }
},
   {
   type: 'Feature',
   properties: {
       title: 'Millbrae',
       'marker-color': '#66CCFF',
       'marker-size': 'large',
       'marker-symbol': 'marker',
   },
   geometry: {
       type: 'Point',
       coordinates: [-122.38666,37.599787]
   }
},
   {
   type: 'Feature',
   properties: {
       title: 'Montgomery St.',
       'marker-color': '#66CCFF',
       'marker-size': 'large',
       'marker-symbol': 'marker',
   },
   geometry: {
       type: 'Point',
       coordinates: [-122.401407,37.789256]
   }
},
   {
   type: 'Feature',
   properties: {
       title: 'North Berkeley',
       'marker-color': '#66CCFF',
       'marker-size': 'large',
       'marker-symbol': 'marker',
   },
   geometry: {
       type: 'Point',
       coordinates: [-122.283451,37.87404]
   }
},
   {
   type: 'Feature',
   properties: {
       title: 'North Concord/Martinez',
       'marker-color': '#66CCFF',
       'marker-size': 'large',
       'marker-symbol': 'marker',
   },
   geometry: {
       type: 'Point',
       coordinates: [-122.024597,38.00327]
   }
},
   {
   type: 'Feature',
   properties: {
       title: 'Oakland Int\'l Airport',
       'marker-color': '#66CCFF',
       'marker-size': 'large',
       'marker-symbol': 'marker',
   },
   geometry: {
       type: 'Point',
       coordinates: [-122.21244024,37.71297174]
   }
},
   {
   type: 'Feature',
   properties: {
       title: 'Orinda',
       'marker-color': '#66CCFF',
       'marker-size': 'large',
       'marker-symbol': 'marker',
   },
   geometry: {
       type: 'Point',
       coordinates: [-122.1837911,37.87836087]
   }
},
   {
   type: 'Feature',
   properties: {
       title: 'Pittsburg/Bay Point',
       'marker-color': '#66CCFF',
       'marker-size': 'large',
       'marker-symbol': 'marker',
   },
   geometry: {
       type: 'Point',
       coordinates: [-121.945154,38.018914]
   }
},
   {
   type: 'Feature',
   properties: {
       title: 'Pleasant Hill/Contra Costa Centre',
       'marker-color': '#66CCFF',
       'marker-size': 'large',
       'marker-symbol': 'marker',
   },
   geometry: {
       type: 'Point',
       coordinates: [-122.056013,37.928403]
   }
},
   {
   type: 'Feature',
   properties: {
       title: 'Powell St.',
       'marker-color': '#66CCFF',
       'marker-size': 'large',
       'marker-symbol': 'marker',
   },
   geometry: {
       type: 'Point',
       coordinates: [-122.406857,37.784991]
   }
},
   {
   type: 'Feature',
   properties: {
       title: 'Richmond',
       'marker-color': '#66CCFF',
       'marker-size': 'large',
       'marker-symbol': 'marker',
   },
   geometry: {
       type: 'Point',
       coordinates: [-122.353165,37.936887]
   }
},
   {
   type: 'Feature',
   properties: {
       title: 'Rockridge',
       'marker-color': '#66CCFF',
       'marker-size': 'large',
       'marker-symbol': 'marker',
   },
   geometry: {
       type: 'Point',
       coordinates: [-122.251793,37.844601]
   }
},
   {
   type: 'Feature',
   properties: {
       title: 'San Bruno',
       'marker-color': '#66CCFF',
       'marker-size': 'large',
       'marker-symbol': 'marker',
   },
   geometry: {
       type: 'Point',
       coordinates: [-122.416038,37.637753]
   }
},
   {
   type: 'Feature',
   properties: {
       title: 'San Francisco Int\'l Airport',
       'marker-color': '#66CCFF',
       'marker-size': 'large',
       'marker-symbol': 'marker',
   },
   geometry: {
       type: 'Point',
       coordinates: [-122.392612,37.616035]
   }
},
   {
   type: 'Feature',
   properties: {
       title: 'San Leandro',
       'marker-color': '#66CCFF',
       'marker-size': 'large',
       'marker-symbol': 'marker',
   },
   geometry: {
       type: 'Point',
       coordinates: [-122.1613112,37.72261921]
   }
},
   {
   type: 'Feature',
   properties: {
       title: 'South Hayward',
       'marker-color': '#66CCFF',
       'marker-size': 'large',
       'marker-symbol': 'marker',
   },
   geometry: {
       type: 'Point',
       coordinates: [-122.0575506,37.63479954]
   }
},
   {
   type: 'Feature',
   properties: {
       title: 'South San Francisco',
       'marker-color': '#66CCFF',
       'marker-size': 'large',
       'marker-symbol': 'marker',
   },
   geometry: {
       type: 'Point',
       coordinates: [-122.444116,37.664174]
   }
},
   {
   type: 'Feature',
   properties: {
       title: 'Union City',
       'marker-color': '#66CCFF',
       'marker-size': 'large',
       'marker-symbol': 'marker',
   },
   geometry: {
       type: 'Point',
       coordinates: [-122.017867,37.591208]
   }
},
   {
   type: 'Feature',
   properties: {
       title: 'Walnut Creek',
       'marker-color': '#66CCFF',
       'marker-size': 'large',
       'marker-symbol': 'marker',
   },
   geometry: {
       type: 'Point',
       coordinates: [-122.067423,37.905628]
   }
},
{
type: 'Feature',
properties: {
    title: 'West Dublin/ Pleasanton',
    'marker-color': '#66CCFF',
    'marker-size': 'large',
    'marker-symbol': 'marker',
},
geometry: {
    type: 'Point',
    coordinates: [-121.928099,37.699759]
}
},
   {
   type: 'Feature',
   properties: {
       title: 'West Oakland',
       'marker-color': '#66CCFF',
       'marker-size': 'large',
       'marker-symbol': 'marker',
   },
   geometry: {
       type: 'Point',
       coordinates: [-122.2945822,37.80467476]
   }
},

    ]
};



myLayer.setGeoJSON(geojson); // Adds all of the markers to the map
myLayer.on('mouseover',function(e){
	e.layer.openPopup();
	});



map.on('ready', function() {
    // featureLayer.getBounds() returns the corners of the furthest-out markers,
    // and map.fitBounds() makes sure that the map contains these.
    map.fitBounds(myLayer.getBounds());
});









/*function onmove() {
    // Get the map bounds - the top-left and bottom-right locations.
    var inBounds = [],
        bounds = map.getBounds();
    markers.eachLayer(function(marker) {
        // For each marker, consider whether it is currently visible by comparing
        // with the current map bounds.
        if (bounds.contains(marker.getLatLng())) {
            inBounds.push(marker.options.title);
        }
    });
    // Display a list of markers.
    document.getElementById('coordinates').innerHTML = inBounds.join('\n');
}

map.on('move', onmove);

// call onmove off the bat so that the list is populated.
// otherwise, there will be no markers listed until the map is moved.
onmove();
</script>

*/
