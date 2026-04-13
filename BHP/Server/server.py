from flask import Flask, request, jsonify
import util
app = Flask(__name__)

@app.route('/get_location_names')
def get_location_names():
    response = jsonify({
        'locations' : util.get_location_names()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

@app.route('/predict_home_price', methods=['POST'])
def predict_home_price():
    try:
        print("predict_home_price called")
        print("form data:", request.form)

        total_sqft = float(request.form['total_sqft'])
        location = request.form['location']
        bhk = int(request.form['bhk'])
        bath = int(request.form['bath'])

        estimated_price = util.get_estimated_price(location, total_sqft, bhk, bath)
        print("estimated price:", estimated_price)

        response = jsonify({
            'estimated_price': estimated_price
        })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    except Exception as e:
        print("ERROR in predict_home_price:", e)
        response = jsonify({
            'error': str(e)
        })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response, 500

if __name__ == "__main__":
    print("Starting Python Flask Server For Home Price Prediction...")
    util.load_saved_artifacts()
    app.run(debug=True)