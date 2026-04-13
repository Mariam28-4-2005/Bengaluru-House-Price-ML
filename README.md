# Bengaluru-House-Price-ML
Machine learning project for predicting Bengaluru house prices using Python, scikit-learn, and Flask.

# Machine Learning Project

## 📌 Project Description

This project focuses on applying machine learning techniques to predict house prices using a dataset from Kaggle (Bengaluru Home Prices).

The process started with data understanding and cleaning, where unnecessary features such as *area type, society, balcony, and availability* were removed. Missing values were handled, and non-numeric data was converted into numerical format. Special attention was given to the **total_sqft** column by converting complex values into usable numeric values.

Feature engineering was applied to improve the dataset by creating meaningful features, reducing categorical complexity, and improving data quality. Outliers were identified and removed to ensure better model performance.

After preprocessing, multiple machine learning models were trained and tested using **scikit-learn**. The final model was saved using a pickle file for later use.

## ⚙️ Project Structure

The project was organized using Visual Studio Code in a structured format:

* **client/**: Frontend (HTML, CSS, JavaScript)
* **model/**: Jupyter Notebook, dataset, and columns configuration
* **server/**: Flask backend (API handling requests)

The frontend interacts with the backend using HTTP requests (GET & POST), allowing users to input data and receive predictions.

## 🛠️ Technologies Used

* Python
* Jupyter Notebook
* Pandas
* NumPy
* Matplotlib
* Scikit-learn
* Flask
* HTML, CSS, JavaScript

## 🤖 Models Used

* Linear Regression
* Lasso Regression
* Decision Tree Regressor

## 📊 Results

The models were trained and evaluated using different techniques including train-test split and cross-validation. The best-performing model was selected based on accuracy and prediction performance.

## 🎥 Project Demo

https://youtu.be/jhi8whoULv4

## 📁 Files Included

* Jupyter Notebook (.ipynb)
* Dataset
* Model file (.pickle)
* Frontend files (HTML, CSS, JS)
* Backend (Flask server)
* Video explanation



