import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendEmail } from '../../utils/smtp';
const Certificate = ({ activeInput, setActiveInput, data, setData, email }) => {
  const [File, setFile] = useState('');
  const [width, setCanvasWidth] = useState('');
  const [height, setCanvasHeight] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [loading, setLoading] = useState(false);
  const [choice, setChoice] = useState({
    download: false,
    send: false,
  });

  const handleSend = () => {
    setChoice({
      download: false,
      send: true,
    });
  };
  const handleDownload = () => {
    console.log('download');
    setChoice({
      download: true,
      send: false,
    });
  };
  useEffect(() => {
    handleDownloadOrSend();
  }, [choice]);

  const handleDownloadOrSend = () => {
    const canvas = document.getElementById('certificate');
    const ctx = canvas.getContext('2d');

    // Define the dimensions of the visible image portion
    const imageWidth = width;
    const imageHeight = height;

    // Create a temporary canvas with the same dimensions as the image
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    tempCanvas.width = imageWidth;
    tempCanvas.height = imageHeight;

    const img = new Image();
    img.src = imgSrc; // Replace with the URL of the image you want to load

    img.onload = async function () {
      tempCtx.drawImage(img, 0, 0, imageWidth, imageHeight);

      tempCtx.font = `${data.name.fontSize}px ${data.name.fontName}`;
      tempCtx.fillStyle = `${data.name.fontColor}`;
      tempCtx.fillText(
        `${data.name.value === '' ? 'Name Here' : data.name.value}`,
        data.name.xAxis,
        data.name.yAxis
      );

      tempCtx.font = `${data.uniqueId.fontSize}px ${data.uniqueId.fontName}`;
      tempCtx.fillStyle = `${data.uniqueId.fontColor}`;
      tempCtx.fillText(
        `${data.uniqueId.value === '' ? 'Certi Here' : data.uniqueId.value}`,
        data.uniqueId.xAxis,
        data.uniqueId.yAxis
      );

      tempCtx.font = `${data.session.fontSize}px ${data.session.fontName}`;
      tempCtx.fillStyle = `${data.session.fontColor}`;
      tempCtx.fillText(
        `${data.session.value === '' ? 'Session Here' : data.session.value}`,
        data.session.xAxis,
        data.session.yAxis
      );
      tempCtx.font = `${data.department.fontSize}px ${data.department.fontName}`;
      tempCtx.fillStyle = `${data.department.fontColor}`;
      tempCtx.fillText(
        `${
          data.department.value === ''
            ? 'Deparment Here'
            : data.department.value
        }`,
        data.department.xAxis,
        data.department.yAxis
      );
      // Convert the visible image portion to a data URL
      const imageDataURL = tempCanvas.toDataURL('image/png');

      if (choice.send) {
        try {
          await sendEmail(data.name.value, email, imageDataURL);
          toast('Email sent successfully', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        } catch (err) {
          console.log(err);
          toast.error('Failed to sent email', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
      }

      //download the image
      if (choice.download) {
        const a = document.createElement('a');
        a.href = imageDataURL;
        a.download = `${data.name.value}.png`; // Set the file name for the downloaded image
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    };
  };

  function drag(event) {
    if (activeInput?.name) {
      setData({
        ...data,
        name: {
          ...data?.name,
          xAxis: event.offsetX,
          yAxis: event.offsetY,
        },
      });
    }

    if (activeInput.uniqueId) {
      setData({
        ...data,
        uniqueId: {
          ...data?.uniqueId,
          xAxis: event.offsetX,
          yAxis: event.offsetY,
        },
      });
    }
    if (activeInput.session) {
      setData({
        ...data,
        session: {
          ...data?.session,
          xAxis: event.offsetX,
          yAxis: event.offsetY,
        },
      });
    }
    if (activeInput.department) {
      setData({
        ...data,
        department: {
          ...data?.department,
          xAxis: event.offsetX,
          yAxis: event.offsetY,
        },
      });
    }
  }

  const deleteCanvas = () => {
    const canvas = document.getElementById('certificate');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setFile('')
  };

  const stopDrag = () => {
    setActiveInput({
      name: false,
      uniqueId: false,
      session: false,
      department: false,
    });
  };

  useEffect(() => {
    const canvas = document.getElementById('certificate');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    if (File) {
      const reader = new FileReader();

      reader.onload = (e) => {
        img.src = e.target.result;
        setImgSrc(e.target.result);
      };
      canvas.addEventListener('mousemove', drag);
      canvas.addEventListener('mousedown', stopDrag);
      img.onload = () => {
        const aspectRatio = img.width / img.height;

        // Calculate the dimensions to fit the image within the canvas
        let newWidth, newHeight;
        if (canvas.width / aspectRatio < canvas.height) {
          newWidth = canvas.width;
          newHeight = canvas.width / aspectRatio;
        } else {
          newWidth = canvas.height * aspectRatio;
          newHeight = canvas.height;
        }
        setCanvasWidth(newWidth);
        setCanvasHeight(newHeight);

        // Center the image on the canvas
        // const x = (canvas.width - newWidth) / 2;
        // const y = (canvas.height - newHeight) / 2;

        ctx.drawImage(img, 0, 0, newWidth, newHeight);

        ctx.font = `${data.name.fontSize}px ${data.name.fontName}`;
        ctx.fillStyle = `${data.name.fontColor}`;
        ctx.fillText(
          `${data.name.value === '' ? 'Name Here' : data.name.value}`,
          data.name.xAxis,
          data.name.yAxis
        );

        ctx.font = `${data.uniqueId.fontSize}px ${data.uniqueId.fontName}`;
        ctx.fillStyle = `${data.uniqueId.fontColor}`;
        ctx.fillText(
          `${data.uniqueId.value === '' ? 'Certi Here' : data.uniqueId.value}`,
          data.uniqueId.xAxis,
          data.uniqueId.yAxis
        );

        ctx.font = `${data.session.fontSize}px ${data.session.fontName}`;
        ctx.fillStyle = `${data.session.fontColor}`;
        ctx.fillText(
          `${data.session.value === '' ? 'Session Here' : data.session.value}`,
          data.session.xAxis,
          data.session.yAxis
        );
        ctx.font = `${data.department.fontSize}px ${data.department.fontName}`;
        ctx.fillStyle = `${data.department.fontColor}`;
        ctx.fillText(
          `${
            data.department.value === ''
              ? 'Deparment Here'
              : data.department.value
          }`,
          data.department.xAxis,
          data.department.yAxis
        );
      };

      reader.readAsDataURL(File);
    }

    return () => {
      canvas.removeEventListener('mousemove', drag);
      canvas.removeEventListener('mousedown', stopDrag);
    };
  }, [File, activeInput, data]);

  return (
    <div id='downloadWrapper'>
      <ToastContainer />
      <div id='certificateWrapper'>
        <canvas
          id='certificate'
          width='950'
          height='550'
          style={{ border: '2px dashed black' }}
        />
      </div>
      <div>
        <input
          type='file'
          onChange={(e) => setFile(e.target.files[0])}
          name='certificate uploder'
          id='certificate-uploader'
        />
        {File && (
          <button onClick={deleteCanvas} className='delete-btn'>
            Delete
          </button>
        )}
        {File && (
          <button onClick={handleDownload} className='download-btn'>
            Download
          </button>
        )}
        {File && (
          <button onClick={handleSend} className='send-btn'>
            Send
          </button>
        )}
      </div>
    </div>
  );
};

export default Certificate;
