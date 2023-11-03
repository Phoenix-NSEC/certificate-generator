import { useState } from 'react';
import Certificate from './Certificate';
const CertificateData = () => {
  const[email, setEmail] = useState('');
  const [certCord, setCertCord] = useState({
    name: {
      value: '',
      xAxis: 0,
      yAxis: 0,
      fontName: 'Times New Roman',
      fontSize: 40,
      fontColor: '#FFFFFF',
    },
    uniqueId: {
      value: '',
      xAxis: 0,
      yAxis: 0,
      fontName: 'Times New Roman',
      fontSize: 15,
      fontColor: '#FFFFFF',
    },
    session: {
      value: '',
      xAxis: 0,
      yAxis: 0,
      fontName: 'Times New Roman',
      fontSize: 15,
      fontColor: '#FFFFFF',
    },
    department: {
      value: '',
      xAxis: 0,
      yAxis: 0,
      fontName: 'Times New Roman',
      fontSize: 15,
      fontColor: '#FFFFFF',
    },
  });

  

  const [activeInputEle, setActiveInputEle] = useState({
    name: false,
    uniqueId: false,
    session: false,
    department: false,
  });
  return (
    <div className='App'>
      <div className='Meta'>
        {/* Details and credentials */}
        <div className='mb-3'>
          <div className='input-title'>
            <label htmlFor='exampleFormControlInput1' className='form-label'>
              Participant Name
            </label>
            <div>
              <input
                type='checkbox'
                className='check-type'
                name='check-title'
                checked={activeInputEle.name}
                onChange={() =>
                  setActiveInputEle({
                    name: true,
                    uniqueId: false,
                    session: false,
                    department: false,
                  })
                }
              />
            </div>
            <input
              type='color'
              value={certCord.name.fontColor}
              onChange={(e) =>
                setCertCord({
                  ...certCord,
                  name: { ...certCord.name, fontColor: e.target.value },
                })
              }
              style={{ width: '30px', border: 'none', outline: 'none' }}
              className='color'
            />
          </div>
          <input
            type='text'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='Name here'
            value={certCord.name.value}
            onChange={(e) =>
              setCertCord({
                ...certCord,
                name: { ...certCord.name, value: e.target.value },
              })
            }
          />
          <div className='mt-3 d-flex'>
            <input
              type='text'
              className='form-control'
              placeholder='Font'
              aria-label='Font'
              value={certCord.name.fontName}
              onChange={(e) =>
                setCertCord({
                  ...certCord,
                  name: { ...certCord.name, fontName: e.target.value },
                })
              }
            />

            <input
              type='text'
              className='form-control'
              placeholder='Font Size'
              aria-label='Font Size'
              value={certCord.name.fontSize}
              onChange={(e) =>
                setCertCord({
                  ...certCord,
                  name: { ...certCord.name, fontSize: e.target.value },
                })
              }
            />
          </div>
        </div>

        <div className='mb-3'>
          <div className='input-title'>
            <label htmlFor='exampleFormControlInput1' className='form-label'>
              Unique Id
            </label>
            <div>
              <input
                type='checkbox'
                className='check-type'
                name='check-title'
                checked={activeInputEle.uniqueId}
                onChange={() =>
                  setActiveInputEle({
                    name: false,
                    uniqueId: true,
                    session: false,
                    department: false,
                  })
                }
              />
            </div>
            <input
              type='color'
              value={certCord.uniqueId.fontColor}
              style={{ width: '30px', border: 'none', outline: 'none' }}
              className='color'
              onChange={(e) =>
                setCertCord({
                  ...certCord,
                  uniqueId: { ...certCord.uniqueId, fontColor: e.target.value },
                })
              }
            />
          </div>
          <input
            type='text'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='unique Id'
            value={certCord.uniqueId.value}
            onChange={(e) =>
              setCertCord({
                ...certCord,
                uniqueId: { ...certCord.uniqueId, value: e.target.value },
              })
            }
          />
          <div className='mt-3 d-flex'>
            <input
              type='text'
              className='form-control'
              placeholder='Font'
              aria-label='Font'
              value={certCord.uniqueId.fontName}
              onChange={(e) =>
                setCertCord({
                  ...certCord,
                  uniqueId: { ...certCord.uniqueId, fontName: e.target.value },
                })
              }
            />

            <input
              type='text'
              className='form-control'
              placeholder='Font Size'
              aria-label='Font Size'
              value={certCord.uniqueId.fontSize}
              onChange={(e) =>
                setCertCord({
                  ...certCord,
                  uniqueId: { ...certCord.uniqueId, fontSize: e.target.value },
                })
              }
            />
          </div>
        </div>

        <div className='mb-3'>
          <div className='input-title'>
            <label htmlFor='exampleFormControlInput1' className='form-label'>
              Session
            </label>
            <div>
              <input
                type='checkbox'
                className='check-type'
                name='check-title'
                checked={activeInputEle.session}
                onChange={() =>
                  setActiveInputEle({
                    name: false,
                    uniqueId: false,
                    session: true,
                    department: false,
                  })
                }
              />
            </div>
            <input
              type='color'
              value={certCord.session.fontColor}
              style={{ width: '30px', border: 'none', outline: 'none' }}
              className='color'
              onChange={(e) =>
                setCertCord({
                  ...certCord,
                  session: { ...certCord.session, fontColor: e.target.value },
                })
              }
            />
          </div>
          <input
            type='text'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='Session'
            value={certCord.session.value}
            onChange={(e) =>
              setCertCord({
                ...certCord,
                session: { ...certCord.session, value: e.target.value },
              })
            }
          />
          <div className='mt-3 d-flex'>
            <input
              type='text'
              className='form-control'
              placeholder='Font'
              aria-label='Font'
              value={certCord.session.fontName}
              onChange={(e) =>
                setCertCord({
                  ...certCord,
                  session: { ...certCord.session, fontName: e.target.value },
                })
              }
            />

            <input
              type='text'
              className='form-control'
              placeholder='Font Size'
              aria-label='Font Size'
              value={certCord.session.fontSize}
              onChange={(e) =>
                setCertCord({
                  ...certCord,
                  session: { ...certCord.session, fontSize: e.target.value },
                })
              }
            />
          </div>
        </div>

        <div className='mb-3'>
          <div className='input-title'>
            <label htmlFor='exampleFormControlInput1' className='form-label'>
              Department
            </label>
            <div>
              <input
                type='checkbox'
                className='check-type'
                name='check-title'
                checked={activeInputEle.department}
                onChange={() =>
                  setActiveInputEle({
                    name: false,
                    uniqueId: false,
                    session: false,
                    department: true,
                  })
                }
              />
            </div>
            <input
              type='color'
              value={certCord.department.fontColor}
              style={{ width: '30px', border: 'none', outline: 'none' }}
              className='color'
              onChange={(e) =>
                setCertCord({
                  ...certCord,
                  department: {
                    ...certCord.department,
                    fontColor: e.target.value,
                  },
                })
              }
            />
          </div>
          <input
            type='text'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='Department'
            value={certCord.department.value}
            onChange={(e) =>
              setCertCord({
                ...certCord,
                department: { ...certCord.department, value: e.target.value },
              })
            }
          />
          <div className='mt-3 d-flex'>
            <input
              type='text'
              className='form-control'
              placeholder='Font'
              aria-label='Font'
              value={certCord.department.fontName}
              onChange={(e) =>
                setCertCord({
                  ...certCord,
                  department: {
                    ...certCord.department,
                    fontName: e.target.value,
                  },
                })
              }
            />

            <input
              type='text'
              className='form-control'
              placeholder='Font Size'
              aria-label='Font size'
              value={certCord.department.fontSize}
              onChange={(e) =>
                setCertCord({
                  ...certCord,
                  department: {
                    ...certCord.department,
                    fontSize: e.target.value,
                  },
                })
              }
            />
          </div>
        </div>

        <div className='mb-3'>
          <div className='input-title'>
            <label htmlFor='exampleFormControlInput1' className='form-label'>
              Email id
            </label>
          </div>
          <input
            type='email'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='Email id'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
      </div>

      <Certificate
        activeInput={activeInputEle}
        setActiveInput={setActiveInputEle}
        data={certCord}
        setData={setCertCord}
        email={email}
      />
    </div>
  );
};

export default CertificateData;
