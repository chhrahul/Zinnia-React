import * as React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDropzone } from 'react-dropzone'

function VenderSignupFourthStep(props) {
    const { handleInputGettingVender, gettingVenderSignupDetails, selectedSignupType, handleSelectSignupType, step, setStep, SetGettingVenderSignupDetails, files,
        setFiles } = props

    const gettingVenderProps = {
        handleInputGettingVender,
        gettingVenderSignupDetails,
        SetGettingVenderSignupDetails,
        selectedSignupType,
        handleSelectSignupType,
        step,
        setStep,
        useFormik

    }

    const formik = useFormik({
        initialValues: {

        },
        onSubmit: values => {
            if (step >= 8) return
            setStep(step + 1)
        },
    });
    const handleImages = {
        files,
        setFiles,
    }

    return (
        <span className='px-0'>
            <form onSubmit={formik.handleSubmit} id="form-data">
                <p>
                    <span className="text-danger"> 3 of 4 </span> Show customers your work!
                </p>
                <h1>
                    Let’s add some photos!
                </h1>
                <p>
                    Get people excited to see your work! You’ll need to add at least 3 photos to continue.
                </p>
                <MyDropzone {...handleImages} />
            </form>

        </span>

    )
}
export default VenderSignupFourthStep


function MyDropzone(props) {

    const { files, setFiles } = props
    const img = {
        width: '100%',
        height: '100%'
    };

    const baseStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: 'rgb(139 137 137)',
        borderStyle: 'dashed',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
        outline: 'none',
        transition: 'border .24s ease-in-out'
    };

    const focusedStyle = {
        borderColor: '#2196f3'
    };

    const acceptStyle = {
        borderColor: '#00e676'
    };

    const rejectStyle = {
        borderColor: '#ff1744'
    };


    const { getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject } = useDropzone({
            accept: {
                'image/*': []
            },
            onDrop: acceptedFiles => {
                setFiles(acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })));
            }
        });

    const thumbs = files.map(file => (
        <div className="col-md-3 px-0 mt-2 ">
            <div className="m-2 card radio-custom-parant h-100">
                <img
                    src={file.preview}
                    style={img}
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                    className="h-100 w-100"
                    alt="" />
                <div className="radio-custom-parant mt-1">
                    <div class="form-check m-2">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        <label class="form-check-label radio-custom-img" for="exampleRadios1">
                            Mark as main photo
                        </label>
                    </div>
                </div>
            </div>

        </div >
    ));

    const style = React.useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);

    React.useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    return (
        <>
            <div {...getRootProps({ className: 'dropzone', style })} className='mt-5'>
                <input {...getInputProps()} />
                <img src="/images/icons/img-place.svg" alt="" className="mb-3" />
                <img src="/images/icons/button.svg" alt="" className="mb-3" />
                <p className="drag mb-5" >Or drag and Drop</p>
                <p>JPG, PNG, or TIFF. 2:3 ratio recommended</p>

            </div>
            <div className="row mt-2 mb-5">
                {thumbs.length > 0 ? <p className="uploaded-text mt-2 mb-0">Uploaded photos</p> : ""}
                {thumbs}
            </div>
        </>
    );
}



