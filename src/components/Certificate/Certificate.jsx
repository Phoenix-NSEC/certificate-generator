import { useState, useEffect } from 'react';
const Certificate = ({ activeInput, setActiveInput, data, setData }) => {
  const [File, setFile] = useState('');

  const handleDownload = () => {
    const canvas = document.getElementById('certificate');
    const imageDataURL = canvas.toDataURL('image/png'); // Convert canvas content to data URL

    const a = document.createElement('a');
    a.href = imageDataURL;
    a.download = 'downloaded_image.png'; // Set the file name for the downloaded image
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
    console.log('dragged..');
  }

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
      };
      canvas.addEventListener('mousemove', drag);
      canvas.addEventListener('mousedown', stopDrag);
      img.onload = () => {
        //set image size to same as width and height of height
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
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
          <button onClick={handleDownload} className='delete-btn'>
            Download
          </button>
        )}
      </div>
    </div>
  );
};

export default Certificate;
