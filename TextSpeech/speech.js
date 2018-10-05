function Speech()
{
	var utterance = new SpeechSynthesisUtterance();
	utterance.text = 'ガリガリ君ソーダ味';
	utterance.lang = 'ja-JP';

	speechSynthesis.speak( utterance );
}
function OnClick()
{
	Speech();
	console.log("Speeching ....");
}
