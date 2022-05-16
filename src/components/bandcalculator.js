import React, { useState, useEffect } from "react";

function BandCalculator() {

	const [bandSize, setBandSize] = useState(5)
	const [sumBandCost, setSumBandCost] = useState(0)

	const [musicianPayRate1, setMusicianPayRate1] = useState(0)
	const [musicianPayRate2, setMusicianPayRate2] = useState(0)
	const [musicianPayRate3, setMusicianPayRate3] = useState(0)
	const [musicianPayRate4, setMusicianPayRate4] = useState(0)
	const [musicianPayRate5, setMusicianPayRate5] = useState(0)
	const [musicianPayRate6, setMusicianPayRate6] = useState(0)
	const [musicianPayRate7, setMusicianPayRate7] = useState(0)
	const [musicianPayRate8, setMusicianPayRate8] = useState(0)
	const [musicianPayRate9, setMusicianPayRate9] = useState(0)
	
	useEffect(() => {
		setSumBandCost(musicianPayRate1 + musicianPayRate2)
	}, [musicianPayRate1, musicianPayRate2])
	
	// setSumBandCost(
	// 	musician1PayRate + 
	// 	musician2PayRate + 
	// 	musician3PayRate + 
	// 	musician4PayRate + 
	// 	musician5PayRate + 
	// 	musician6PayRate + 
	// 	musician7PayRate + 
	// 	musician8PayRate + 
	// 	musician9PayRate
	// )	


	const bandSizeOptions = () => {
		let bandSizeOptionsArray = [];
		for (let i = 1; i < 21; i++){
			bandSizeOptionsArray.push(<option key={i} value={i}>{i}</option>)
		}
		return bandSizeOptionsArray
	}

	const musiciansAndPayRate = () => {
		let musicianOptionsArray = [];
		for (let i = 0; i < bandSize; i++){
			musicianOptionsArray.push(
				<tr key={i+1} >
					<td align="left" name={`musician ${i+1}`}>musician {i+1}</td>
					<td 
						align="left" 
						name={`musician ${i+1} pay rate`} 
						onChange={(e) => setMusicianPayRate1(parseInt(e.target.value) || 0)}
						>
						$<input type="text" size="10"></input>
					</td>
				</tr>
			)
		}
		return musicianOptionsArray
	}

  const [baseTravelCostPerMusician, setBaseTravelCostPerMusician] = useState(50);
  const [baseTravelCostPerMusicianMarkup, setBaseTravelCostPerMusicianMarkup] = useState(60);

  const [baseTravelTime, setBaseTravelTime] = useState(0);
  const [musicianCount, setMusicianCount] = useState(5);

  const [soundsystemCost, setSoundsystemCost] = useState(200);
  const [soundsystemCostMarkup, setSoundsystemCostMarkup] = useState(250);

  const [bandLeaderCost, setBandLeaderCost] = useState(50);
  const [bandLeaderCostMarkup, setBandLeaderCostMarkup] = useState(100);

  const [baseMusicianRate, setBaseMusicianRate] = useState(350);
  const [baseMusicianRateMarkup, setBaseMusicianRateMarkup] = useState(450);

  const [bandCost, setBandCost] = useState(
    (musicianCount * baseMusicianRate) + (musicianCount * baseTravelCostPerMusician * baseTravelTime) + (soundsystemCost + bandLeaderCost)
  );
  const [bandCostMarkup, setBandCostMarkup] = useState(
    musicianCount * baseMusicianRateMarkup +
      musicianCount * baseTravelCostPerMusicianMarkup * baseTravelTime +
      (soundsystemCostMarkup + bandLeaderCostMarkup)
  );

  const [commission1, setCommission1] = useState(100);
  const [commission2, setCommission2] = useState(100);
  const [commissionBonus, setCommissionBonus] = useState(0);

  const [subTotal, setSubTotal] = useState();
  const [subTotalMarkup, setSubTotalMarkup] = useState();

  const [taxRate, setTaxRate] = useState(0.08);
  const [taxRateMarkup, setTaxRateMarkup] = useState(0.08);

  const [totalPrice, setTotalPrice] = useState(
    bandCost + (commission1 + commission2) * taxRate
  );
  const [totalPriceMarkup, setTotalPriceMarkup] = useState(
    bandCostMarkup + (commission1 + commission2) * taxRateMarkup
  );

  useEffect(() => {
    setBandCost(
      (musicianCount * baseMusicianRate) +
        (musicianCount * baseTravelCostPerMusician * baseTravelTime) +
        (soundsystemCost + bandLeaderCost)
    );
  }, [ bandLeaderCost,baseMusicianRate, baseTravelCostPerMusician, baseTravelTime, musicianCount, soundsystemCost ]);

  useEffect(() => {
    setBandCostMarkup(
			(musicianCount * baseMusicianRateMarkup) +
      (musicianCount * baseTravelCostPerMusicianMarkup * baseTravelTime) +
      (soundsystemCostMarkup + bandLeaderCostMarkup)
    );
  }, [ bandLeaderCostMarkup, baseMusicianRateMarkup, baseTravelCostPerMusicianMarkup, baseTravelTime, musicianCount, soundsystemCostMarkup ]);

  useEffect(() => {
    setSubTotal(
      bandCost + (commission1 + commission2)
    );
  }, [bandCost, commission1, commission2]);

  useEffect(() => {
    setSubTotalMarkup(
      bandCostMarkup + (commission1 + commission2)
    );
  }, [bandCostMarkup, commission1, commission2]);

  useEffect(() => {
    setTotalPrice(subTotal + (subTotal * taxRate));
  }, [subTotal, taxRate]);

  useEffect(() => {
    setTotalPriceMarkup(subTotalMarkup + (subTotalMarkup * taxRateMarkup));
  }, [subTotalMarkup, taxRateMarkup]);

	const changeTaxRate = (e) => {
		setTaxRate(e.target.value.includes("%") ? (parseInt(e.target.value)/100 || 0 ) : (parseInt(e.target.value)/100 || 0 ))
	}
	const changeTaxRateMarkup = (e) => {
		setTaxRateMarkup(e.target.value.includes("%") ? (parseInt(e.target.value)/100 || 0 ) : (parseInt(e.target.value)/100 || 0 ))
	}

	const completionBonusReturn = () => {
		if (commissionBonus > 0) {
			return <tr>
				<td align="left">Completion Bonus {commissionBonus}%
					{" "}:</td>
				<td align="left">+${Math.floor((totalPriceMarkup - totalPrice)*(commissionBonus/100))}</td>
				<td align="left">+${Math.floor((totalPriceMarkup - totalPrice)*(commissionBonus/100))}</td>
			</tr>
		} 
	}

	const bandSpreadsheet = () => {
		let bandSpread = []
		for (let i = 1; i <= 20; i++){
			bandSpread.push(<tr key={`${i} piece band`}>
				<td align="left">
					{i} piece band
				</td>
				<td align="left">
					${ ((i * baseMusicianRateMarkup) + (baseTravelCostPerMusicianMarkup * baseTravelTime) + soundsystemCostMarkup + bandLeaderCostMarkup + (commission1 + commission2)) * ( taxRate )  }
				</td>
				<td align="left">
					${ ((i * baseMusicianRateMarkup) + (baseTravelCostPerMusicianMarkup * baseTravelTime) + soundsystemCostMarkup + bandLeaderCostMarkup ) * 0.2 }
				</td>
				<td align="left">
					${ ((i * baseMusicianRateMarkup) + (baseTravelCostPerMusicianMarkup * baseTravelTime) + soundsystemCostMarkup + bandLeaderCostMarkup ) * 0.8 }
				</td>
			</tr>)
		}
		return bandSpread
	}

  return (
    <React.Fragment>
      <h1>Band Size Calculator ({bandSize})</h1>
			Band Size <select value={bandSize} onChange={(e) => setBandSize(e.target.value)}>
							{bandSizeOptions()} {/* this returns 1-20 select options */}
						</select>
						<h3>Band Cost: ${sumBandCost}</h3>
      <table align="center">
				<thead>
					<tr>
						<th align="left">Musician</th>
						<th align="left">($) Pay Rate</th>
						{/* <th align="left">Cost Markup</th> */}
						{/* <th>Notes</th> */}
					</tr>
				</thead>

				<tbody>
						{musiciansAndPayRate()}
					{/* <tr> */}
						{/* <td align="left"></td> */}
						{/* <td align="left"></td> */}
						{/* <td align="left"></td> */}
						{/* <td align="left"></td> */}
					{/* </tr> */}
				</tbody>

					{/* <tbody>
						{bandSpreadsheet()}
					</tbody> */}
					
			</table>
    </React.Fragment>
  );
}

export default BandCalculator;
