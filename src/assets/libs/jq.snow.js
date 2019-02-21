<<<<<<< HEAD
/**
 * js网页雪花效果jquery插件 
 */
(function($){
	$.fn.snow = function(options){
		var query = options.query || 'body'
		var $container = document.querySelector(query)
		var $flake = $('<div class="snowbox" />').css({'position': 'absolute', 'top': (-options.maxSize + 'px')}).html('&#10052;'),
			documentHeight = $container.offsetHeight,
			documentWidth	= $container.offsetWidth,
			defaults		= {
								minSize		: 10,		//雪花的最小尺寸
								maxSize		: 20,		//雪花的最大尺寸
								newOn		: 100,		//雪花出现的频率
								flakeColor	: "#FFFFFF"	
							},
			options	= $.extend({}, defaults, options);
		
		return setInterval( function(){
			var startPositionLeft 	= Math.random() * documentWidth - 40,
			startOpacity		= 0.7 + Math.random(),
			sizeFlake			= options.minSize + Math.random() * options.maxSize,
			endPositionTop		= documentHeight - 40,
			endPositionLeft		= startPositionLeft + Math.random() * 120,
			durationFall		= documentHeight * 20 + Math.random() * 2000;
			$flake.clone().appendTo(query).css({
						left: startPositionLeft,
						opacity: startOpacity,
						'font-size': sizeFlake,
						color: options.flakeColor
					}).animate({
						top: endPositionTop,
						left: endPositionLeft,
						opacity: 0.2
					}, durationFall, 'linear', function(){
						$(this).remove()
					}
				);
				
		}, options.newOn);
	};
	
=======
/**
 * js网页雪花效果jquery插件 
 */
(function($){
	$.fn.snow = function(options){
		var query = options.query || 'body'
		var $container = document.querySelector(query)
		var $flake = $('<div class="snowbox" />').css({'position': 'absolute', 'top': (-options.maxSize + 'px')}).html('&#10052;'),
			documentHeight = $container.offsetHeight,
			documentWidth	= $container.offsetWidth,
			defaults		= {
								minSize		: 10,		//雪花的最小尺寸
								maxSize		: 20,		//雪花的最大尺寸
								newOn		: 100,		//雪花出现的频率
								flakeColor	: "#FFFFFF"	
							},
			options	= $.extend({}, defaults, options);
		
		return setInterval( function(){
			var startPositionLeft 	= Math.random() * documentWidth - 40,
			startOpacity		= 0.7 + Math.random(),
			sizeFlake			= options.minSize + Math.random() * options.maxSize,
			endPositionTop		= documentHeight - 40,
			endPositionLeft		= startPositionLeft + Math.random() * 120,
			durationFall		= documentHeight * 20 + Math.random() * 2000;
			$flake.clone().appendTo(query).css({
						left: startPositionLeft,
						opacity: startOpacity,
						'font-size': sizeFlake,
						color: options.flakeColor
					}).animate({
						top: endPositionTop,
						left: endPositionLeft,
						opacity: 0.2
					}, durationFall, 'linear', function(){
						$(this).remove()
					}
				);
				
		}, options.newOn);
	};
	
>>>>>>> edec116a69bcb34c17d962b79cce20c0b4962284
})(jQuery);