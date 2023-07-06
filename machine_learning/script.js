
// get data from api
async function getData() {
    const carsResponse = await fetch ('https://storage.googleapis.com/tfjs-tutorials/carsData.json');
    const carData = await carsResponse.json();
    const cleaned = carData.map( car => ({
        mpg: car.Miles_per_Gallon,
        horspower: car.Horsepower,
    })).filter( car => (car.mpg != null && car.horspower != null));
    console.log(carData);
return cleaned;
}

async function run() {
    const data = await getData();
    const values = data.map( d => ({
        x: d.horspower,
        y: d.mpg
    }))

    tfvis.render.scatterplot({ name : 'Horspower vs mpg'},
    {values},
    {
        xlabel: 'Horspower',
        yLabel: 'Mpg',
        height: 300
    })
}
function creareModel() {
    const model = tf.sequential();

    //add leayer
    model.add(tf.layers.dense({inputShape: [1], units: 1, useBias: true}));

    //add output layer

    model.add(tf.layers.dense({units: 1, useBias: true}));

    return model;
}

const model = creareModel();
tfvis.show.modelSummary({name: 'Model Summary'}, model);


function convertToTensor(data) {
    //wrapping calculations with 'tidy' will dispose any
    // intermediate tensors

    return tf.tidy(() => {
        // step 1 shuffle the data
        tf.util.shuffle(data);
    })
}

document.addEventListener('DOMContentLoaded', run);