# WordScapes
<h2>Getting Started:</h2>
1.Make sure you have node.js installed on your system. 
  
>If not then you can install it from [here](https://nodejs.org/en/)

2.Clone the project repo on you system by either downloading the code or by using git clone

3.Run ```npm install``` after opening the terminal in the project folder and then run ```npm start``` and go to the rerquired domain(localhost) in your browser.

4.Select the photo of the grid/crossword (make sure image quality is good)   
>This will work correctly on square grid.

5.Enter the words in the text box seperated by space(make sure input format is coorect).

6.Hit Submit.
  
<h2>Brief Explanation of working : </h2>
<li> This application is using tesseract-OCR for extracting text from image.
<li> Then the text generated is converted into a matrix.
<li> The words are also seperated and gets stored in a 2-D array.
<li> Then a Trie Data Structure is being used to search the words in the matrix.  
  
><li> This is very good example of using Data Structures in real world projects.
  
  <h2> Some ScreenShots of the application are shown below: </h2>
  
  
![Screenshot 2022-12-03 183519](https://user-images.githubusercontent.com/77826715/205442344-3245ac31-bb27-441f-84d7-fec5f4116ef3.png)
![Screenshot 2022-12-03 183546](https://user-images.githubusercontent.com/77826715/205442347-8d2728df-dcaf-49cc-9fd9-4f1bd913b969.png)
