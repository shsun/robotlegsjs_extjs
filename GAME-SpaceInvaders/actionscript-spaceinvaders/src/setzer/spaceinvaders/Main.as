package setzer.spaceinvaders
{

	import flash.display.Sprite;
	import flash.display.StageAlign;
	import flash.display.StageScaleMode;
	import flash.events.Event;
	import flash.geom.Rectangle;

	import robotlegs.bender.bundles.palidor.PalidorBundle;
	import robotlegs.bender.extensions.contextView.ContextView;
	import robotlegs.bender.framework.api.IContext;
	import robotlegs.bender.framework.impl.Context;

	import setzer.spaceinvaders.config.GameConfig;
	import setzer.spaceinvaders.config.MVCConfig;
	import setzer.spaceinvaders.views.MainStarlingView;

	import starling.core.Starling;
	import starling.utils.Color;

	[SWF(width="340", height="480", frameRate="60", backgroundColor="#272f31")]
	public class Main extends Sprite
	{
		public function Main()
		{
			stage.align = StageAlign.TOP_LEFT;
			stage.scaleMode = StageScaleMode.NO_SCALE;
			stage.frameRate = 60;
			stage.color = Color.BLACK;

			addEventListener( Event.ADDED_TO_STAGE, tetris_onAddedToStageHandler );
		}

		private function tetris_onAddedToStageHandler( e:Event ):void
		{
			var starling:Starling = new Starling( MainStarlingView, stage, new Rectangle( 0, 0, stage.stageWidth, stage.stageHeight ) );
			starling.nativeStage.frameRate = 60;
			starling.start();

			const robotlegsContext:IContext = new Context();
			robotlegsContext.install( PalidorBundle );
			robotlegsContext.configure( MVCConfig, GameConfig, starling, new ContextView( this ) );
		}
	}
}
