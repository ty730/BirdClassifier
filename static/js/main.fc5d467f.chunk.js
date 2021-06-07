(this.webpackJsonpbirdclassifier=this.webpackJsonpbirdclassifier||[]).push([[0],{11:function(e,t,i){"use strict";i.r(t);var a=i(1),s=i.n(a),c=i(3),n=i.n(c),r=(i(8),i(9),i.p+"static/media/brds.58e760d0.JPG"),o=i.p+"static/media/lossresnet18.2d4a6ab7.JPG",d=i.p+"static/media/lossresnet50.829ccc0b.JPG",l=i.p+"static/media/lossaug.39f6ece7.JPG",h=i(0);var j=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"title",children:[Object(h.jsx)("h1",{children:"Bird Classifier Kaggle Competition"}),Object(h.jsx)("p",{children:"By Tyler Wong"})]}),Object(h.jsxs)("div",{className:"section",children:[Object(h.jsx)("h2",{children:"Introduction"}),Object(h.jsxs)("p",{children:["Source code is available on Google Colab ",Object(h.jsx)("a",{href:"https://colab.research.google.com/drive/11C7hILEP2-ia_eoXcKmwOan7IvMD4U7t?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"here"}),"."]}),Object(h.jsx)("h3",{children:"The Problem"}),Object(h.jsx)("p",{children:"The problem I am trying to solve is how to accurately and efficiently identify hundreds of bird species based on pictures."}),Object(h.jsx)("h3",{children:"The Dataset"}),Object(h.jsxs)("p",{children:["The dataset from the bird classification Kaggle competition found ",Object(h.jsx)("a",{href:"https://www.kaggle.com/c/birds21sp/data",target:"_blank",rel:"noopener noreferrer",children:"here"}),"."]}),Object(h.jsx)("img",{src:r,alt:""})]}),Object(h.jsxs)("div",{className:"section",children:[Object(h.jsx)("h2",{children:"Approach"}),Object(h.jsx)("h3",{children:"Techniques Used"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"Convolutional Neural Network"}),Object(h.jsx)("li",{children:"Data augmentation"}),Object(h.jsx)("li",{children:"Image preproccessing"}),Object(h.jsx)("li",{children:"ResNet18"}),Object(h.jsx)("li",{children:"ResNet50"})]}),Object(h.jsx)("h3",{children:"The Process"}),Object(h.jsxs)("ol",{children:[Object(h.jsx)("li",{children:"First I preproccessed the data to resize all the images to 224x224 pixels."}),Object(h.jsx)("li",{children:"Then I loaded and augmented the data. Augmentations included random cropping, random horizontal flipping, gaussian noise, and random rotation."}),Object(h.jsx)("li",{children:"Then I used a pretrained model and retrained it using the dataset. Throughout retraining I experimented with parameters such as learning rate, weight decay, batch size, and number of epochs in order to optimize my model. Additionally, I used a random 10% of the training data as a validation set to check accuracy."}),Object(h.jsx)("li",{children:"Lastly I created predictions on the test data and submitted them to the kaggle competition."})]}),Object(h.jsx)("h3",{children:"Why this approach"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"By preproccessing my images it greatly speeds up dataloading because the dataloader wouldn't have to resize all of the images each time it loads them."}),Object(h.jsx)("li",{children:"By using data augmentation it would decrease overfitting of my model to the training data because it would be harder for the model to memorize images."}),Object(h.jsx)("li",{children:"By using a pretrained model I wouldn't have to create my own model, it would be quicker to train, and it would have preadjusted weights for increased accuracy."})]}),Object(h.jsx)("h3",{children:"Problems I ran into"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"The dataset had a large variety of sizes of images and many of them were very large, which made it take a long time to copy all of the images onto the session storage each time I started Google Colab. To fix this I zipped all of the data into a zip file and unzipped it into the session storage instead of copying it, this reduced roughly 2 hours of wait time down to 3 minutes."}),Object(h.jsx)("li",{children:"Resizing the data using a dataloader took significant amount of time and slowed down training a lot. To fixed this problem I preproccessed all of the images in the dataset and resized them to 224x224 pixels. This made the whole dataset smaller and greatly increased the speed of training (from ~25 min per epoch to ~3 minutes per epoch)."}),Object(h.jsx)("li",{children:"My model consistently overfit to my training data. To try and fix this I added batch normalization to the last fully connected layer, increased the weight decay, and used more data augmentation. On top of random cropping and random flipping I also added random gaussian noise and random rotation. These solutions decreased the overfitting, however, they also decreased my overall accuracy and I ran out of GPU runtime before I could adjust other parameters like learning rate in order to possibly fix this."}),Object(h.jsx)("li",{children:"I ran out of time on the GPU runtime in Google Colab multiple times, and each consecutive time I had less GPU time available. This caused me to not be able to fine tune my model as discussed above."})]})]}),Object(h.jsxs)("div",{className:"section",children:[Object(h.jsx)("h2",{children:"Results"}),Object(h.jsx)("h3",{children:"ResNet18"}),Object(h.jsxs)("p",{children:["Training accuracy: ",Object(h.jsx)("span",{children:"91.142%"})]}),Object(h.jsxs)("p",{children:["Validation accuracy: ",Object(h.jsx)("span",{children:"72.856%"})]}),Object(h.jsxs)("p",{children:["Kaggle submission accuracy: ",Object(h.jsx)("span",{children:"72.6%"})]}),Object(h.jsx)("p",{children:"Loss Graph:"}),Object(h.jsx)("img",{src:o,alt:""}),Object(h.jsx)("h3",{children:"ResNet50"}),Object(h.jsxs)("p",{children:["Training accuracy: ",Object(h.jsx)("span",{children:"93.398%"})]}),Object(h.jsxs)("p",{children:["Validation accuracy: ",Object(h.jsx)("span",{children:"78.562%"})]}),Object(h.jsxs)("p",{children:["Kaggle submission accuracy: ",Object(h.jsx)("span",{children:"77.7%"})]}),Object(h.jsx)("p",{children:"Loss Graph:"}),Object(h.jsx)("img",{src:d,alt:""}),Object(h.jsx)("h3",{children:"ResNet50 with more data augmentation and batch normalization"}),Object(h.jsxs)("p",{children:["Training accuracy: ",Object(h.jsx)("span",{children:"85.451%"})]}),Object(h.jsxs)("p",{children:["Validation accuracy: ",Object(h.jsx)("span",{children:"72.901%"})]}),Object(h.jsxs)("p",{children:["Kaggle submission accuracy: ",Object(h.jsx)("span",{children:"74.5%"})]}),Object(h.jsx)("p",{children:"Loss Graph:"}),Object(h.jsx)("img",{src:l,alt:""})]}),Object(h.jsxs)("div",{className:"section",children:[Object(h.jsx)("h2",{children:"Discussion"}),Object(h.jsx)("h3",{children:"What worked and why"}),Object(h.jsx)("p",{children:"What got me the highest testing accuracy was using the pretrained ResNet50 model with random flipping, random cropping, and a learning rate starting at 0.01 and decreasing at about 0.001 per epoch. This worked well was because with the larger model of ResNet50 it has more layers which means that it can track and identify more features in the images. Although it overfit significantly, with some data augmentation of random cropping and random flipping it allowed this overfitting to decrease enough where the testing accuracy could be closer to the training accuracy, but the training accuracy could still be very high."}),Object(h.jsx)("h3",{children:"What I learned"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"How to use pytorch, CNNs in pytorch, and pretrained models."}),Object(h.jsx)("li",{children:"How to preproccess images and the importance of it to speed up data loading."}),Object(h.jsx)("li",{children:"Ways to deal with overfitting."}),Object(h.jsx)("li",{children:"How to use a validation set to check accuracy and make adjustments before creating a full prediction."})]}),Object(h.jsx)("h3",{children:"Further Applications"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"This project and the ideas of using a pretrained CNNs could be applied to classiying other images, specifically most directly for classifying other species of other animals."}),Object(h.jsx)("li",{children:"The ideas in this project could also be used for object detection. This project could even be used as the classification portion of the R-CNN model for object detection."})]})]})]})},b=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,12)).then((function(t){var i=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;i(e),a(e),s(e),c(e),n(e)}))};n.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(j,{})}),document.getElementById("root")),b()},8:function(e,t,i){},9:function(e,t,i){}},[[11,1,2]]]);
//# sourceMappingURL=main.fc5d467f.chunk.js.map