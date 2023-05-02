# Inference is all you need!

In machine learning, inference refers to the process of using a trained model to make predictions or decisions based on new, unseen data. We create these models by training it on a specific task, such as recognizing patterns or making predictions, by providing it with a large number of examples. Once the model is trained, it can be used to make predictions or other wise inferences. _AI inference_ refers to the process of making queries to an AI model using novel inputs and returning the resulting predictions.

It’ll be imperative to deploy an AI inference system into your production applications going forward. Inference API could be a part of the tech stack for most business applications going forward and can be deployed as a micro service. These _AI inference_ inference systems are being used for a while now by many companies like Amex for fraud detection, Amazon for product search feature, Snap for ad recommendation systems.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f9d90faf-49de-4ae9-a100-f2bd3e9f906a/Untitled.png)

**Inference as a microservice**

Modern AI inference are being implemented as an API micro service which accepts queries and return inference response. Some of the advancement and developments that have enabled and set the stage for current growth and adoption of AI inference systems:

- Hardware advancements
- Deep learning advances
- High scalable applications
- Containerization
- Cloud computing adoption

**Inference Patterns**

There are 3 inference patterns. The business application for which we are building the inference systems and its latency and throughput requirements are key to selecting the pattern.

- **Real time inference**: Inference is computed in real time. It has to be fast. Time might vary from milliseconds to few seconds based on application. It might be acceptable for a chatbot to have 2 seconds latency. Fraud detection and digital bidding inference systems have latency under 10 millisecond.
- **Batch inference**: Inferences are made in groups or batches. Latency requirements are more relaxed in the order of hours or days. Recommendation systems can be build with this pattern.
- **Streaming inference**: Data must be processed continuously. Very relevant in autonomous driving and other robotics use cases where the control inference decisions are based on the stream of input data of the environment they operate in.

There is also an online and offline inference settings which can be applicable to some use cases.

**Inference Architecture**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a6337fec-913c-4f8b-9a57-617e495e7592/Untitled.png)

From the **Application** the inferences are requested and consumed thought an API.

**Prediction queuing service** can be used to accommodate multiple requests even when it exceeds the throughput capacity and have a consistent system reliability.

**Batching service** can be used for more efficient usage of the compute. It can optional but having batching capabilities in certain cases would be better latency and utilization metrics.

The **ML model** can then used to transform the input data into predictions.

TensorRT, TensorFlow, PyTorch are some of the more widely used **model frameworks.** PyTorch can be used for both training the models and deploying them. TensorRT, Nvidia’s framework is used to deploy pre-trained models.

**Compute hardware** is the used do the computation required to make these predictions. Hardware required could be a combination of CPU and GPU resources. Most cloud provider now have IaaS(Infrastructure as a service) offerings to host Inference servers.

**Metrics servers** can be used to collect and store system and result metrics. And this data can be used to improve the prediction accuracy, hardware utilization and other optimizations.

-_Abhinash Tummala_

### References:

[A guide and reference to accelerated AI inference.](https://resources.nvidia.com/en-us-inference-resources-ug/?nvid=nv-int-billweb-733790#cid=dl05_nv-int-billweb_en-us)

Title inspired by the paper _Attention is all you need_, which introduced the novel neural network architecture, transformers.
