(() => {
		let theThumbnails = document.querySelectorAll("#buttonHolder img"),
			gameBoard = document.querySelector(".puzzle-board"),
			puzzlePieces = document.querySelectorAll(".puzzle-pieces *"),
			dropZones = document.querySelectorAll(".drop-zone");
			
			
			const puzzlePaths= [ "topLeft", "topRight", "bottomLeft", "bottomRight"]

			function changeImgSet() {

				gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
		
				puzzlePaths.forEach((img, index) => {
					puzzlePieces[index].src =`images/${img + this.dataset.bgref}.jpg`;
				});
			}

		function dragStarted(event){
			console.log('started draginng a piece')
			;
			event.dataTransfer.setData('currentItem', event.target.id);
			
		}
		function allowDragOver(event){
			event.preventDefault();
			console.log('dragged over me');
		}
		function allowDrop(event){
			event.preventDefault();
			console.log('dropped on me')

			if (this.childElementCount == 1) {return; }
		

			let droppedEl = event.dataTransfer.getData('currentItem');
			console.log(droppedEl);

			event.target.appendChild(document.querySelector(`#${droppedEl}`))
			

		}
		function resetpuzzle() {
			const parent = document.getElementById('zone')
		while (parent.firstChild) {
 			parent.firstChild.remove()
			 
		}
	
}
		
		


		theThumbnails.forEach(item => 
			{
				item.addEventListener("click",changeImgSet);
				item.addEventListener("click",resetpuzzle);
			});
			
		
		

		puzzlePieces.forEach(piece => piece.addEventListener("dragstart", dragStarted));

		dropZones.forEach(zone => zone.addEventListener('dragover', allowDragOver));

	dropZones.forEach(zone => zone.addEventListener('drop', allowDrop));
		
	
		

		changeImgSet.call(theThumbnails[0]);




})();
