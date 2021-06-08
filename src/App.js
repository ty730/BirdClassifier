import './App.css';
import birdImages from './images/brds.JPG';
import loss18 from './images/lossresnet18.JPG';
import loss50 from './images/lossresnet50.JPG';
import lossAug from './images/lossaug.JPG';

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Bird Classification Kaggle Competition</h1>
        <p>By Tyler Wong</p>
      </div>
      <div className="section">
        <h2>Introduction</h2>
        <p>Source code is available on Google Colab <a href="https://colab.research.google.com/drive/11C7hILEP2-ia_eoXcKmwOan7IvMD4U7t?usp=sharing" target="_blank" rel="noopener noreferrer">here</a>.</p>
        <h3>The Problem</h3>
        <p>
          The problem I am trying to solve is how to accurately and efficiently identify hundreds of bird species based on pictures.
        </p>
        <h3>The Dataset</h3>
        <p>
          The dataset from the bird classification Kaggle competition found <a href="https://www.kaggle.com/c/birds21sp/data" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
        <img src={birdImages} alt="" />
      </div>
      <div className="section">
        <h2>Approach</h2>
        <h3>Techniques Used</h3>
        <ul>
          <li>Convolutional Neural Network</li>
          <li>Data augmentation</li>
          <li>Image preproccessing</li>
          <li>ResNet18</li>
          <li>ResNet50</li>
        </ul>
        <h3>The Process</h3>
        <ol>
          <li>First I preproccessed the data to resize all the images to 224x224 pixels.</li>
          <li>
            Then I loaded and augmented the data. Augmentations included random cropping,
            random horizontal flipping, gaussian noise, and random rotation.
          </li>
          <li>
            Then I used a pretrained model and retrained it using the dataset. Throughout retraining
            I experimented with parameters such as learning rate, weight decay, batch size, and number of
            epochs in order to optimize my model. Additionally, I used a random 10% of the training data
            as a validation set to check accuracy.
          </li>
          <li>Lastly I created predictions on the test data and submitted them to the kaggle competition.</li>
        </ol>
        <h3>Why this approach</h3>
        <ul>
          <li>
            By preproccessing my images it greatly speeds up dataloading because the dataloader wouldn't have to
            resize all of the images each time it loads them.
          </li>
          <li>
            By using data augmentation it would decrease overfitting
            of my model to the training data because it would be harder for the model to memorize images.
          </li>
          <li>
            By using a pretrained model I wouldn't have to create my own model, it would be quicker to train,
            and it would have preadjusted weights for increased accuracy.
          </li>
        </ul>
        <h3>Problems I ran into</h3>
        <ul>
          <li>
            The dataset had a large variety of sizes of images and many of them were very large, which made it
            take a long time to copy all of the images onto the session storage each time I started Google Colab.
            To fix this I zipped all of the data into a zip file and unzipped it into the session storage instead
            of copying it, this reduced roughly 2 hours of wait time down to 3 minutes.
          </li>
          <li>
            Resizing the data using a dataloader took significant amount of time and slowed down training a lot.
            To fixed this problem I preproccessed all of the images in the dataset and resized them to 224x224 pixels.
            This made the whole dataset smaller and greatly increased the speed of training (from ~25 min per epoch to ~3 minutes per epoch).
          </li>
          <li>
            My model consistently overfit to my training data. To try and fix this I added batch normalization to
            the last fully connected layer, increased the weight decay, and used more data augmentation.
            On top of random cropping and random flipping I also added random gaussian noise and random rotation.
            These solutions decreased the overfitting, however, they also decreased my overall accuracy and I ran out
            of GPU runtime before I could adjust other parameters like learning rate in order to possibly fix this.
          </li>
          <li>
            I ran out of time on the GPU runtime in Google Colab multiple times, and each consecutive
            time I had less GPU time available. This caused me to not be able to fine tune my model as discussed above.
          </li>
        </ul>
      </div>
      <div className="section">
        <h2>Results</h2>
        <h3>ResNet18</h3>
        <p>Training accuracy: <span>91.142%</span></p>
        <p>Validation accuracy: <span>72.856%</span></p>
        <p>Kaggle submission accuracy: <span>72.6%</span></p>
        <p>Loss Graph:</p>
        <img src={loss18} alt="" />
        <h3>ResNet50</h3>
        <p>Training accuracy: <span>93.398%</span></p>
        <p>Validation accuracy: <span>78.562%</span></p>
        <p>Kaggle submission accuracy: <span>77.7%</span></p>
        <p>Loss Graph:</p>
        <img src={loss50} alt="" />
        <h3>ResNet50 with more data augmentation and batch normalization</h3>
        <p>Training accuracy: <span>85.451%</span></p>
        <p>Validation accuracy: <span>72.901%</span></p>
        <p>Kaggle submission accuracy: <span>74.5%</span></p>
        <p>Loss Graph:</p>
        <img src={lossAug} alt="" />
      </div>
      <div className="section">
        <h2>Discussion</h2>
        <h3>What worked and why</h3>
        <p>What got me the highest testing accuracy was using the pretrained ResNet50 model with
          random flipping, random cropping, and a learning rate starting at 0.01 and decreasing
          at about 0.001 per epoch. This worked well was because with the larger model of ResNet50
          it has more layers which means that it can track and identify more features in the images.
          Although it overfit significantly, with some data augmentation of random cropping and
          random flipping it allowed this overfitting to decrease enough where the testing accuracy
          could be closer to the training accuracy, but the training accuracy could still be very high.
        </p>
        <h3>What I learned</h3>
        <ul>
          <li>
            How to use pytorch, CNNs in pytorch, and pretrained models.
          </li>
          <li>
            How to preproccess images and the importance of it to speed up data loading.
          </li>
          <li>
            Ways to deal with overfitting.
          </li>
          <li>
            How to use a validation set to check accuracy and make adjustments before creating a full prediction.
          </li>
        </ul>
        <h3>Further Applications</h3>
        <ul>
          <li>
            This project and the ideas of using a pretrained CNNs could be applied to classiying other images,
            specifically most directly for classifying other species of other animals.
          </li>
          <li>
            The ideas in this project could also be used for object detection. This project could even be used as
            the classification portion of the R-CNN model for object detection.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
