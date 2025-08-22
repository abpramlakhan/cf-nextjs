"use client";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, FormEventHandler, useRef } from "react";
import Select from "react-select"

const RegisterationForm = () => {
    const phonenumberWrapperRef = useRef<HTMLDivElement>(null);
    const brideGroomWrapperRef = useRef<HTMLDivElement>(null);
    const genderWrapperRef = useRef<HTMLDivElement>(null);
    const dateOfBirthWrapperRef = useRef<HTMLDivElement>(null);
    const motherToungeuWrapperRef = useRef<HTMLDivElement>(null);
    


    const handleOnFocus = (event: ChangeEvent<HTMLInputElement>) => {

        const { name } = event.target;
        if (name === "phonenumber") {
            if (phonenumberWrapperRef) {
                phonenumberWrapperRef.current?.classList.remove("hidden")
            }
        } else if (name === "bride_groom_name") {
            if (brideGroomWrapperRef) {
                brideGroomWrapperRef.current?.classList.remove("hidden")
            }
        }
        else if (name === "gender") {
            if (genderWrapperRef) {
                genderWrapperRef.current?.classList.remove("hidden")
            }
        }
        else if (name === "bride_groom_name") {
            if (brideGroomWrapperRef) {
                brideGroomWrapperRef.current?.classList.remove("hidden")
            }
        }
        else if (name === "dateOfBirth") {
            if (dateOfBirthWrapperRef) {
                dateOfBirthWrapperRef.current?.classList.remove("hidden")
            }
        }
        else if (name === "motherTounge") {
            if (motherToungeuWrapperRef) {
                motherToungeuWrapperRef.current?.classList.remove("hidden")
            }
        }
    }

    const registeration1Submit: FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("btn clicked", event);
    }

    return (
        <form onSubmit={registeration1Submit}>
            <div className="inputElementWrapper hidden" ref={phonenumberWrapperRef}>
                <label className='r-label' htmlFor='phonenumber'>Mobile Number</label>
                <div className='d-flex formGroup'>
                    <div>
                        <Select
                            className="phonenumberlist"
                            classNamePrefix="select"
                            getOptionValue={(option) => `${option.id}`}
                            getOptionLabel={option => `+${option.label}`}
                            // defaultValue={colourOptions[0]}
                            // isDisabled={isDisabled}
                            // isLoading={isLoading}
                            isClearable={false}
                            // isRtl={isRtl}
                            isSearchable={true}
                            name="color"
                            options={[
                                {
                                    "id": "91",
                                    "label": "91"
                                },
                                {
                                    "id": "1",
                                    "label": "1"
                                },
                                {
                                    "id": "44",
                                    "label": "44"
                                },
                                {
                                    "id": "93",
                                    "label": "93"
                                },
                                {
                                    "id": "355",
                                    "label": "355"
                                },
                                {
                                    "id": "376",
                                    "label": "376"
                                },
                                {
                                    "id": "244",
                                    "label": "244"
                                },
                                {
                                    "id": "1264",
                                    "label": "1264"
                                },
                                {
                                    "id": "672",
                                    "label": "672"
                                },
                                {
                                    "id": "1268",
                                    "label": "1268"
                                },
                                {
                                    "id": "54",
                                    "label": "54"
                                },
                                {
                                    "id": "297",
                                    "label": "297"
                                },
                                {
                                    "id": "61",
                                    "label": "61"
                                },
                                {
                                    "id": "43",
                                    "label": "43"
                                },
                                {
                                    "id": "994",
                                    "label": "994"
                                },
                                {
                                    "id": "1242",
                                    "label": "1242"
                                },
                                {
                                    "id": "973",
                                    "label": "973"
                                },
                                {
                                    "id": "880",
                                    "label": "880"
                                },
                                {
                                    "id": "1246",
                                    "label": "1246"
                                },
                                {
                                    "id": "375",
                                    "label": "375"
                                },
                                {
                                    "id": "32",
                                    "label": "32"
                                },
                                {
                                    "id": "501",
                                    "label": "501"
                                },
                                {
                                    "id": "229",
                                    "label": "229"
                                },
                                {
                                    "id": "1441",
                                    "label": "1441"
                                },
                                {
                                    "id": "975",
                                    "label": "975"
                                },
                                {
                                    "id": "591",
                                    "label": "591"
                                },
                                {
                                    "id": "387",
                                    "label": "387"
                                },
                                {
                                    "id": "267",
                                    "label": "267"
                                },
                                {
                                    "id": "47",
                                    "label": "47"
                                },
                                {
                                    "id": "55",
                                    "label": "55"
                                },
                                {
                                    "id": "246",
                                    "label": "246"
                                },
                                {
                                    "id": "1340",
                                    "label": "1340"
                                },
                                {
                                    "id": "673",
                                    "label": "673"
                                },
                                {
                                    "id": "359",
                                    "label": "359"
                                },
                                {
                                    "id": "226",
                                    "label": "226"
                                },
                                {
                                    "id": "95",
                                    "label": "95"
                                },
                                {
                                    "id": "257",
                                    "label": "257"
                                },
                                {
                                    "id": "855",
                                    "label": "855"
                                },
                                {
                                    "id": "237",
                                    "label": "237"
                                },
                                {
                                    "id": "1",
                                    "label": "1"
                                },
                                {
                                    "id": "238",
                                    "label": "238"
                                },
                                {
                                    "id": "1345",
                                    "label": "1345"
                                },
                                {
                                    "id": "236",
                                    "label": "236"
                                },
                                {
                                    "id": "235",
                                    "label": "235"
                                },
                                {
                                    "id": "56",
                                    "label": "56"
                                },
                                {
                                    "id": "86",
                                    "label": "86"
                                },
                                {
                                    "id": "61",
                                    "label": "61"
                                },
                                {
                                    "id": "891",
                                    "label": "891"
                                },
                                {
                                    "id": "57",
                                    "label": "57"
                                },
                                {
                                    "id": "269",
                                    "label": "269"
                                },
                                {
                                    "id": "243",
                                    "label": "243"
                                },
                                {
                                    "id": "243",
                                    "label": "243"
                                },
                                {
                                    "id": "682",
                                    "label": "682"
                                },
                                {
                                    "id": "506",
                                    "label": "506"
                                },
                                {
                                    "id": "225",
                                    "label": "225"
                                },
                                {
                                    "id": "385",
                                    "label": "385"
                                },
                                {
                                    "id": "53",
                                    "label": "53"
                                },
                                {
                                    "id": "599",
                                    "label": "599"
                                },
                                {
                                    "id": "357",
                                    "label": "357"
                                },
                                {
                                    "id": "420",
                                    "label": "420"
                                },
                                {
                                    "id": "45",
                                    "label": "45"
                                },
                                {
                                    "id": "253",
                                    "label": "253"
                                },
                                {
                                    "id": "1767",
                                    "label": "1767"
                                },
                                {
                                    "id": "1809",
                                    "label": "1809"
                                },
                                {
                                    "id": "670",
                                    "label": "670"
                                },
                                {
                                    "id": "593",
                                    "label": "593"
                                },
                                {
                                    "id": "20",
                                    "label": "20"
                                },
                                {
                                    "id": "503",
                                    "label": "503"
                                },
                                {
                                    "id": "240",
                                    "label": "240"
                                },
                                {
                                    "id": "291",
                                    "label": "291"
                                },
                                {
                                    "id": "372",
                                    "label": "372"
                                },
                                {
                                    "id": "251",
                                    "label": "251"
                                },
                                {
                                    "id": "679",
                                    "label": "679"
                                },
                                {
                                    "id": "500",
                                    "label": "500"
                                },
                                {
                                    "id": "298",
                                    "label": "298"
                                },
                                {
                                    "id": "689",
                                    "label": "689"
                                },
                                {
                                    "id": "594",
                                    "label": "594"
                                },
                                {
                                    "id": "358",
                                    "label": "358"
                                },
                                {
                                    "id": "33",
                                    "label": "33"
                                },
                                {
                                    "id": "262",
                                    "label": "262"
                                },
                                {
                                    "id": "241",
                                    "label": "241"
                                },
                                {
                                    "id": "220",
                                    "label": "220"
                                },
                                {
                                    "id": "995",
                                    "label": "995"
                                },
                                {
                                    "id": "49",
                                    "label": "49"
                                },
                                {
                                    "id": "233",
                                    "label": "233"
                                },
                                {
                                    "id": "350",
                                    "label": "350"
                                },
                                {
                                    "id": "30",
                                    "label": "30"
                                },
                                {
                                    "id": "1473",
                                    "label": "1473"
                                },
                                {
                                    "id": "590",
                                    "label": "590"
                                },
                                {
                                    "id": "502",
                                    "label": "502"
                                },
                                {
                                    "id": "224",
                                    "label": "224"
                                },
                                {
                                    "id": "245",
                                    "label": "245"
                                },
                                {
                                    "id": "1671",
                                    "label": "1671"
                                },
                                {
                                    "id": "592",
                                    "label": "592"
                                },
                                {
                                    "id": "509",
                                    "label": "509"
                                },
                                {
                                    "id": "379",
                                    "label": "379"
                                },
                                {
                                    "id": "504",
                                    "label": "504"
                                },
                                {
                                    "id": "852",
                                    "label": "852"
                                },
                                {
                                    "id": "36",
                                    "label": "36"
                                },
                                {
                                    "id": "354",
                                    "label": "354"
                                },
                                {
                                    "id": "62",
                                    "label": "62"
                                },
                                {
                                    "id": "98",
                                    "label": "98"
                                },
                                {
                                    "id": "964",
                                    "label": "964"
                                },
                                {
                                    "id": "353",
                                    "label": "353"
                                },
                                {
                                    "id": "972",
                                    "label": "972"
                                },
                                {
                                    "id": "39",
                                    "label": "39"
                                },
                                {
                                    "id": "1876",
                                    "label": "1876"
                                },
                                {
                                    "id": "81",
                                    "label": "81"
                                },
                                {
                                    "id": "962",
                                    "label": "962"
                                },
                                {
                                    "id": "7",
                                    "label": "7"
                                },
                                {
                                    "id": "254",
                                    "label": "254"
                                },
                                {
                                    "id": "686",
                                    "label": "686"
                                },
                                {
                                    "id": "850",
                                    "label": "850"
                                },
                                {
                                    "id": "82",
                                    "label": "82"
                                },
                                {
                                    "id": "383",
                                    "label": "383"
                                },
                                {
                                    "id": "965",
                                    "label": "965"
                                },
                                {
                                    "id": "996",
                                    "label": "996"
                                },
                                {
                                    "id": "856",
                                    "label": "856"
                                },
                                {
                                    "id": "371",
                                    "label": "371"
                                },
                                {
                                    "id": "961",
                                    "label": "961"
                                },
                                {
                                    "id": "266",
                                    "label": "266"
                                },
                                {
                                    "id": "231",
                                    "label": "231"
                                },
                                {
                                    "id": "218",
                                    "label": "218"
                                },
                                {
                                    "id": "423",
                                    "label": "423"
                                },
                                {
                                    "id": "370",
                                    "label": "370"
                                },
                                {
                                    "id": "352",
                                    "label": "352"
                                },
                                {
                                    "id": "853",
                                    "label": "853"
                                },
                                {
                                    "id": "389",
                                    "label": "389"
                                },
                                {
                                    "id": "261",
                                    "label": "261"
                                },
                                {
                                    "id": "265",
                                    "label": "265"
                                },
                                {
                                    "id": "60",
                                    "label": "60"
                                },
                                {
                                    "id": "960",
                                    "label": "960"
                                },
                                {
                                    "id": "223",
                                    "label": "223"
                                },
                                {
                                    "id": "356",
                                    "label": "356"
                                },
                                {
                                    "id": "692",
                                    "label": "692"
                                },
                                {
                                    "id": "222",
                                    "label": "222"
                                },
                                {
                                    "id": "230",
                                    "label": "230"
                                },
                                {
                                    "id": "52",
                                    "label": "52"
                                },
                                {
                                    "id": "691",
                                    "label": "691"
                                },
                                {
                                    "id": "373",
                                    "label": "373"
                                },
                                {
                                    "id": "377",
                                    "label": "377"
                                },
                                {
                                    "id": "976",
                                    "label": "976"
                                },
                                {
                                    "id": "382",
                                    "label": "382"
                                },
                                {
                                    "id": "212",
                                    "label": "212"
                                },
                                {
                                    "id": "258",
                                    "label": "258"
                                },
                                {
                                    "id": "264",
                                    "label": "264"
                                },
                                {
                                    "id": "674",
                                    "label": "674"
                                },
                                {
                                    "id": "977",
                                    "label": "977"
                                },
                                {
                                    "id": "31",
                                    "label": "31"
                                },
                                {
                                    "id": "599",
                                    "label": "599"
                                },
                                {
                                    "id": "64",
                                    "label": "64"
                                },
                                {
                                    "id": "505",
                                    "label": "505"
                                },
                                {
                                    "id": "227",
                                    "label": "227"
                                },
                                {
                                    "id": "234",
                                    "label": "234"
                                },
                                {
                                    "id": "850",
                                    "label": "850"
                                },
                                {
                                    "id": "47",
                                    "label": "47"
                                },
                                {
                                    "id": "968",
                                    "label": "968"
                                },
                                {
                                    "id": "92",
                                    "label": "92"
                                },
                                {
                                    "id": "680",
                                    "label": "680"
                                },
                                {
                                    "id": "970",
                                    "label": "970"
                                },
                                {
                                    "id": "507",
                                    "label": "507"
                                },
                                {
                                    "id": "675",
                                    "label": "675"
                                },
                                {
                                    "id": "595",
                                    "label": "595"
                                },
                                {
                                    "id": "51",
                                    "label": "51"
                                },
                                {
                                    "id": "63",
                                    "label": "63"
                                },
                                {
                                    "id": "48",
                                    "label": "48"
                                },
                                {
                                    "id": "351",
                                    "label": "351"
                                },
                                {
                                    "id": "974",
                                    "label": "974"
                                },
                                {
                                    "id": "40",
                                    "label": "40"
                                },
                                {
                                    "id": "7",
                                    "label": "7"
                                },
                                {
                                    "id": "250",
                                    "label": "250"
                                },
                                {
                                    "id": "186",
                                    "label": "186"
                                },
                                {
                                    "id": "175",
                                    "label": "175"
                                },
                                {
                                    "id": "178",
                                    "label": "178"
                                },
                                {
                                    "id": "685",
                                    "label": "685"
                                },
                                {
                                    "id": "378",
                                    "label": "378"
                                },
                                {
                                    "id": "239",
                                    "label": "239"
                                },
                                {
                                    "id": "966",
                                    "label": "966"
                                },
                                {
                                    "id": "221",
                                    "label": "221"
                                },
                                {
                                    "id": "381",
                                    "label": "381"
                                },
                                {
                                    "id": "248",
                                    "label": "248"
                                },
                                {
                                    "id": "232",
                                    "label": "232"
                                },
                                {
                                    "id": "65",
                                    "label": "65"
                                },
                                {
                                    "id": "172",
                                    "label": "172"
                                },
                                {
                                    "id": "421",
                                    "label": "421"
                                },
                                {
                                    "id": "386",
                                    "label": "386"
                                },
                                {
                                    "id": "677",
                                    "label": "677"
                                },
                                {
                                    "id": "252",
                                    "label": "252"
                                },
                                {
                                    "id": "27",
                                    "label": "27"
                                },
                                {
                                    "id": "82",
                                    "label": "82"
                                },
                                {
                                    "id": "211",
                                    "label": "211"
                                },
                                {
                                    "id": "34",
                                    "label": "34"
                                },
                                {
                                    "id": "94",
                                    "label": "94"
                                },
                                {
                                    "id": "249",
                                    "label": "249"
                                },
                                {
                                    "id": "597",
                                    "label": "597"
                                },
                                {
                                    "id": "268",
                                    "label": "268"
                                },
                                {
                                    "id": "46",
                                    "label": "46"
                                },
                                {
                                    "id": "41",
                                    "label": "41"
                                },
                                {
                                    "id": "963",
                                    "label": "963"
                                },
                                {
                                    "id": "886",
                                    "label": "886"
                                },
                                {
                                    "id": "992",
                                    "label": "992"
                                },
                                {
                                    "id": "255",
                                    "label": "255"
                                },
                                {
                                    "id": "66",
                                    "label": "66"
                                },
                                {
                                    "id": "228",
                                    "label": "228"
                                },
                                {
                                    "id": "676",
                                    "label": "676"
                                },
                                {
                                    "id": "186",
                                    "label": "186"
                                },
                                {
                                    "id": "216",
                                    "label": "216"
                                },
                                {
                                    "id": "90",
                                    "label": "90"
                                },
                                {
                                    "id": "993",
                                    "label": "993"
                                },
                                {
                                    "id": "688",
                                    "label": "688"
                                },
                                {
                                    "id": "256",
                                    "label": "256"
                                },
                                {
                                    "id": "380",
                                    "label": "380"
                                },
                                {
                                    "id": "971",
                                    "label": "971"
                                },
                                {
                                    "id": "598",
                                    "label": "598"
                                },
                                {
                                    "id": "998",
                                    "label": "998"
                                },
                                {
                                    "id": "678",
                                    "label": "678"
                                },
                                {
                                    "id": "58",
                                    "label": "58"
                                },
                                {
                                    "id": "84",
                                    "label": "84"
                                },
                                {
                                    "id": "967",
                                    "label": "967"
                                },
                                {
                                    "id": "260",
                                    "label": "260"
                                },
                                {
                                    "id": "263",
                                    "label": "263"
                                },
                                {
                                    "id": "243",
                                    "label": "243"
                                }
                            ]}
                        />
                    </div>
                    <div>
                        <input type='text' id='phonenumber' className='form-control' placeholder="Enter Mobile Number"
                            name="phonenumber"
                            onFocus={handleOnFocus} />
                    </div>
                </div>
            </div>
            <div className="inputElementWrapper hidden mt-3" ref={brideGroomWrapperRef}>
                <label className='r-label' htmlFor='bride_groom_name'>Bride/Groom Name</label>
                <div className='formGroup'>
                    <input type='text' id='bride_groom_name' className='form-control' placeholder=""
                        name="bride_groom_name"
                        onFocus={handleOnFocus} />
                </div>
            </div>
            <div className="inputElementWrapper hidden mt-3" ref={genderWrapperRef}>
                <label className='r-label' htmlFor='gender'>Gender</label>
                <div className='formGroup'>
                    <input type='text' id='gender' className='form-control' placeholder=""
                        name="gender"
                        onFocus={handleOnFocus} />
                </div>
            </div>
            <div className="inputElementWrapper hidden mt-3" ref={dateOfBirthWrapperRef}>
                <label className='r-label' htmlFor='dateOfBirth'>Date of Birth</label>
                <div className='formGroup'>
                    <input type='text' id='dateOfBirth' className='form-control' placeholder=""
                        name="dateOfBirth"
                        onFocus={handleOnFocus} />
                </div>
            </div>
            <div className="inputElementWrapper hidden mt-3" ref={motherToungeuWrapperRef}>
                <label className='r-label' htmlFor='motherTounge'>Mother Toungue</label>
                <div className='formGroup'>
                    <input type='text' id='motherTounge' className='form-control' placeholder=""
                        name="motherTounge"
                        onFocus={handleOnFocus} />
                </div>
            </div>

            <div className="mt-5">
                <button type="submit"
                    className="btn btnsubmit w-100">NEXT STEP</button>
            </div>
            <div className="mt-3">
                <p className="text-center afterBtnText">You will receive an OTP on this mobile number</p>
            </div>
            <div className="mt-4 text-center afterBtnText2">
                <p className="mb-0">By proceeding you agree to the</p>
                <p className="mb-0"><Link className="linkDanger" href={'/'}>Terms & Conditions</Link> & <Link className="linkDanger" href={'/'}>Privacy Policy</Link></p>
            </div>
        </form>
    )
}

export default RegisterationForm